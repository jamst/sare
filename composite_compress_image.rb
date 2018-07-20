多个图片压缩成一张图片并且添加上水印


class ImageService

  require "mini_magick"

  def self.tmp_dir
    dir = "#{Rails.root}/tmp/image"
    FileUtils.mkdir(dir) unless File.exists?(dir)
    dir
  end

  def self.composite(image_paths)
    to_path = "#{tmp_dir}/composite_#{SecureRandom.uuid.to_s.strip}.jpeg"
    montage_commond = image_paths + ["-strip", "-quality", "70", "-tile", "1x#{image_paths.length}", "-geometry", "+0+0", to_path]
    MiniMagick::Tool::Montage.new{|m| m.merge! montage_commond}
    to_path
  end

  def self.compress(image_path, watermark = false)
    to_path = "#{tmp_dir}/compress_#{SecureRandom.uuid.to_s.strip}.jpeg"
    image = MiniMagick::Image.open image_path
    image.combine_options do |b|
      b.strip
      b.quality "60"
    end
    if watermark
      watermark_image = MiniMagick::Image.open("#{Rails.root}/app/assets/images/special_watermark.png")
      watermark_width = (image.width * 0.9).to_i
      watermark_height = (watermark_image.height * (watermark_width / watermark_image.width.to_f)).to_i
      watermark_image.resize "#{watermark_width}x#{watermark_height}"
      image = image.composite(watermark_image) do |c|
        c.gravity 'center'
      end
    end
    image.write to_path
    to_path
  end

  def self.old_composite(composite_path, image_paths, cols)
    composite_dir = composite_path.split("/")
    composite_dir = composite_dir[0,composite_dir.length-1].join("/")
    FileUtils.mkdir(composite_dir) unless File.exists?(composite_dir)
    image_matrix = []
    (0..((image_paths.length - 1) / cols)).each do |i|
      image_matrix << image_paths[i*cols, cols].map{|image_path| MiniMagick::Image.open image_path}
    end
    max_width = 0
    image_matrix.each do |image_arr|
      current_width = image_arr.pluck(:width).sum
      max_width = current_width if current_width > max_width
    end
    max_height = 0
    (1..cols).each do |c|
      current_height = image_matrix.map{|image_arr| image_arr[c-1] }.compact.pluck(:height).sum
      max_height = current_height if current_height > max_height
    end
    convert_arr = ["-size", "#{max_width}x#{max_height}", "-strip", "-depth", "8", "xc:none"]
    current_max_height = 0
    image_matrix.each do |image_arr|
      current_width = 0
      current_height = current_max_height
      image_arr.each do |image|
        convert_arr += [image.path, "-geometry", "+#{current_width}+#{current_height}", "-composite"]
        current_width += image.width
        current_max_height = current_height + image.height if current_max_height < current_height + image.height
      end
    end
    convert_arr << composite_path
    MiniMagick::Tool::Convert.new{|convert| convert.merge! convert_arr}
  end

end


使用案例：

files = params[:file]
if files.present?
  total_size = files.map{|f| f.size }.sum
  if total_size <= 20*1024*1024
    image_paths = files.map{|f| f.tempfile.path}
    composite_path = ImageService.composite(image_paths)
    ActiveRecord::Base.transaction do
      @certificate = @company.certificates.build(certificate_params)
      @certificate.employee_id = current_employee.id
      @certificate.save
      attachment = @certificate.build_attachment(created_by: CreatedBy.format_created_by(current_employee))
      File.open(composite_path) do |f|
        attachment.path = f
      end
      attachment.save
    end
  else
    @error_message = "图片总大小不能超过10M！"
  end
else
  @error_message = "附件为空！"
end
            
        
