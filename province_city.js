<script>
var _cityInfo = [{"n":"北京市","c":["北京市"]},
    {"n":"天津市","c":["天津市"]},
    {"n":"上海市","c":["上海市"]},
    {"n":"重庆市","c":["重庆市"]},
    {"n":"河北省","c":["石家庄市","唐山市","秦皇岛市","邯郸市","邢台市","保定市","张家口市","承德市","沧州市","廊坊市","衡水市"]},
    {"n":"山西省","c":["太原市","大同市","阳泉市","长治市","晋城市","朔州市","晋中市","运城市","忻州市","临汾市","吕梁市"]},
    {"n":"台湾省","c":["台北市","高雄市","基隆市","台中市","台南市","新竹市","嘉义市","台北县","宜兰县","桃园县","新竹县","苗栗县","台中县","彰化县","南投县","云林县","嘉义县","台南县","高雄县","屏东县","澎湖县","台东县","花莲县"]},
    {"n":"辽宁省","c":["沈阳市","大连市","鞍山市","抚顺市","本溪市","丹东市","锦州市","营口市","阜新市","辽阳市","盘锦市","铁岭市","朝阳市","葫芦岛市"]},
    {"n":"吉林省","c":["长春市","吉林市","四平市","辽源市","通化市","白山市","松原市","白城市","延吉市","延边朝鲜族自治州"]},
    {"n":"黑龙江省","c":["哈尔滨市","齐齐哈尔市","鹤岗市","双鸭山市","鸡西市","大庆市","伊春市","牡丹江市","佳木斯市","七台河市","黑河市","绥化市","大兴安岭地区"]},
    {"n":"江苏省","c":["南京市","无锡市","徐州市","常州市","苏州市","南通市","连云港市","淮安市","盐城市","扬州市","镇江市","泰州市","宿迁市"]},
    {"n":"浙江省","c":["杭州市","宁波市","温州市","嘉兴市","湖州市","绍兴市","金华市","衢州市","舟山市","台州市","丽水市"]},
    {"n":"安徽省","c":["合肥市","芜湖市","蚌埠市","淮南市","马鞍山市","淮北市","铜陵市","安庆市","黄山市","滁州市","阜阳市","宿州市","巢湖市","六安市","亳州市","池州市","宣城市"]},
    {"n":"福建省","c":["福州市","厦门市","莆田市","三明市","泉州市","漳州市","南平市","龙岩市","宁德市"]},
    {"n":"江西省","c":["南昌市","景德镇市","萍乡市","九江市","新余市","鹰潭市","赣州市","吉安市","宜春市","抚州市","上饶市"]},
    {"n":"山东省","c":["济南市","青岛市","淄博市","枣庄市","东营市","烟台市","潍坊市","济宁市","泰安市","威海市","日照市","莱芜市","临沂市","德州市","聊城市","滨州市","荷泽市"]},
    {"n":"河南省","c":["郑州市","开封市","洛阳市","平顶山市","安阳市","鹤壁市","新乡市","焦作市","濮阳市","许昌市","漯河市","三门峡市","南阳市","商丘市","信阳市","周口市","驻马店市"]},
    {"n":"湖北省","c":["武汉市","黄石市","十堰市","宜昌市","襄樊市","鄂州市","荆门市","孝感市","荆州市","黄冈市","咸宁市","随州市","恩施土家族苗族自治州","仙桃市","潜江市","天门市","神农架林区"]},
    {"n":"湖南省","c":["长沙市","株洲市","湘潭市","衡阳市","邵阳市","岳阳市","常德市","张家界市","益阳市","郴州市","永州市","怀化市","娄底市","湘西土家族苗族自治州"]},
    {"n":"广东省","c":["广州市","深圳市","珠海市","汕头市","韶关市","佛山市","江门市","湛江市","茂名市","肇庆市","惠州市","梅州市","汕尾市","河源市","阳江市","清远市","东莞市","中山市","潮州市","揭阳市","云浮市"]},
    {"n":"甘肃省","c":["兰州市","金昌市","白银市","天水市","嘉峪关市","武威市","张掖市","平凉市","酒泉市","庆阳市","定西市","陇南市","临夏回族自治州","甘南藏族自治州"]},
    {"n":"四川省","c":["成都市","自贡市","攀枝花市","泸州市","德阳市","绵阳市","广元市","遂宁市","内江市","乐山市","南充市","眉山市","宜宾市","广安市","达州市","雅安市","巴中市","资阳市","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"]},
    {"n":"贵州省","c":["贵阳市","六盘水市","遵义市","安顺市","铜仁地区","毕节地区","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"]},
    {"n":"海南省","c":["海口市","三亚市","五指山市","琼海市","儋州市","文昌市","万宁市","东方市","澄迈县","定安县","屯昌县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"]},
    {"n":"云南省","c":["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","思茅市","临沧市","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"]},
    {"n":"青海省","c":["西宁市","海东地区","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"]},
    {"n":"陕西省","c":["西安市","铜川市","宝鸡市","咸阳市","渭南市","延安市","汉中市","榆林市","安康市","商洛市"]},
    {"n":"广西壮族自治区","c":["南宁市","柳州市","桂林市","梧州市","北海市","防城港市","钦州市","贵港市","玉林市","百色市","贺州市","河池市","来宾市","崇左市"]},
    {"n":"西藏自治区","c":["拉萨市","昌都地区","山南地区","日喀则地区","那曲地区","阿里地区","林芝地区"]},
    {"n":"新疆","c":["乌鲁木齐市","克拉玛依市","石河子市","五家渠市","阿拉尔市","图木舒克市","喀什市","阿克苏市","和田市","吐鲁番市","哈密市","阿图什市","博乐市","昌吉市","阜康市","米泉市","库尔勒市","伊宁市","奎屯市","塔城市","乌苏市","阿勒泰市"]},
    {"n":"内蒙古自治区","c":["呼和浩特市","通辽市","包头市"]},
    {"n":"宁夏回族自治区","c":["银川市","石嘴山市","吴忠市","固原市","中卫市"]}];

function initProv(prov, city, defaultProv, defaultCity) {
    var provEl = $(prov);
    var cityEl = $(city);
    var hasDefaultProv = (typeof(defaultCity) != 'undefined');
    var provHtml = '';
    provHtml += '<option value="-1">省份</option>';
    for(var i = 0; i <_cityInfo.length; i++) {
        if("undefined" != typeof region_suc){
            if (hasDefaultProv && _cityInfo[i].n == defaultProv && region_suc==0){
                region_suc =1;
            }
        }
        provHtml += '<option value="' + _cityInfo[i].n + '"' + ((hasDefaultProv &&_cityInfo[i].n == defaultProv) ? ' selected="selected"' : '') + '>' + _cityInfo[i].n + '</option>';
    }
    provEl.html(provHtml);
    initCities(provEl, cityEl, defaultCity);
    provEl.change(function() {
        initCities(provEl, cityEl);
    });
};
function initCities(provEl, cityEl, defaultCity) {
    var city_index=-1
    var hasDefaultCity = (typeof(defaultCity) != 'undefined');
    if(provEl.val() != '' && parseInt(provEl.val()) !="-1" ) {
        for(var i = 0; i <_cityInfo.length; i++) {
            if(_cityInfo[i].n==provEl.val()){
                city_index=i
            }
        }
        var cities = _cityInfo[parseInt(city_index)].c;
        var cityHtml = '';
        cityHtml += '<option value="-1">城市</option>';
        for(var i = 0; i < cities.length; i++) {
            cityHtml += '<option value="' + cities[i] + '"' + ((hasDefaultCity && cities[i] == defaultCity) ? ' selected="selected"' : '') + '>' + cities[i] + '</option>';
        }
        cityEl.html(cityHtml);
        $('select').comboSelect();
    } else {
        cityEl.html('<option value="-1">城市</option>');
    }
};
</script>


页面列表展示城市省份

<div class="ui grid">
  <div class="left floated fourteen wide column">
    <h2><a href="javascript:history.back()"><i class="blue reply icon"></i></a><%= @bd.name %> 管理区域</h2>
  </div>
</div>
<%= simple_form_for @bd, url: admin_crm_bd_area_path(@bd), method: :put do |f| %>
  <div class="ui blue segment">
    <table class="ui selectable structured celled table" id="province_city_table">
      <thead>
        <tr >
          <th class="center aligned" width="20%">省份</th>
          <th class="center aligned">城市</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
  <div class="footer_btn">
    <%= f.button :submit, value: '保存', class: 'ui mini button' %>
  </div>
<% end %>

<% content_for :scripts do %>
  <script type="text/javascript">
    $(function(){
      var tbody_html = "";
      for(var i = 0; i < _cityInfo.length; i++) {
        tbody_html += "<tr>"
        tbody_html += "<td class='center aligned'>"+ _cityInfo[i].n +"</td>";
        tbody_html += "<td class='left aligned'>"
        tbody_html += "<div class='ui checkbox'><input type='checkbox' name='city[]' value='" + _cityInfo[i].n + ",manage" + "'><label>管理</label></div>&nbsp;&nbsp;";
        for(var j = 0; j < _cityInfo[i].c.length; j++) {
          tbody_html += "<div class='ui checkbox'><input type='checkbox' name='city[]' value='" + _cityInfo[i].n + "," + _cityInfo[i].c[j] + "'><label>" + _cityInfo[i].c[j] + "</label></div>&nbsp;&nbsp;";
        }
        tbody_html += " </td>"
        tbody_html += "</tr>"
      }
      $("#province_city_table").find("tbody").html(tbody_html);

      var bd_areas = "<%= @areas_str %>";
      bd_areas = bd_areas.split("|");
      for(var i = 0; i < bd_areas.length; i++){
        $(":checkbox[name^='city'][value='"+ bd_areas[i] +"']").prop("checked", true);
      }
    });
  </script>
<% end %>


初始化城市省份下拉框选项

<div class="ui grid">
  <div class="left floated fourteen wide column">
    <h2><a href="javascript:history.back()"><i class="blue reply icon"></i></a>审核</h2>
  </div>
</div>
<%= simple_form_for @user, url: create_pass_admin_crm_approve_user_path(@pending_user), method: :put, html: {autocomplete: 'off'} do |f| %>
	<div class="ui blue segment">
	<h3 class="ui dividing header">完善公司信息</h3>
      <%= f.simple_fields_for :company, @user.company || @user.build_company do |c| %>
        <div class="four fields">
          <%= c.input :name_cn, input_html: { class: 'prompt', autocomplete: 'off' }, wrapper_html: { class: 'company_name_search ui search' } %>
          <%= c.input :company_type, as: :select, collection: select_options_from_enum(Company, :company_type), include_blank: false, input_html: {class: 'ui dropdown fluid'} %>
        </div>
        <div class="four fields">
          <%= c.input :company_scale, as: :select, collection: select_options_from_enum(Company, :company_scale), include_blank: false, input_html: {class: 'ui dropdown fluid'} %>
          <%= c.input :industry, as: :select, collection: select_options_from_enum(Company, :industry), include_blank: false, input_html: {class: 'ui dropdown fluid'} %>
        </div>
        <div class="four fields">
          <%= c.input :province, label: '省份', as: :select, collection: {}, include_blank: '省份', input_html: {class: 'ui search dropdown fluid'} %>
          <%= c.input :city, label: '城市', as: :select, collection: {}, include_blank: '城市', input_html: {class: 'ui search dropdown fluid'} %>
        </div>
        <div class="four fields">
          <%= c.input :address %>
          <%= c.input :website %>
        </div>
        <div class="four fields">
          <%= c.input :auto_trade, as: :select, label: '自动化交易客户', collection: [['是', true], ['否', false]], include_blank: false, input_html: {class: 'ui dropdown fluid'}, wrapper_html: {style: 'display:none'} %>
        </div>
        <div class="four fields">
          <%= c.input :introduce, as: :text %>
        </div>
      <% end %>
      <h3 class="ui dividing header">完善用户信息</h3>
      <div class="four fields">
        <%= f.input :name %>
        <%= f.input :email %>
      </div>
      <div class="four fields">
        <%= f.input :mobile %>
        <%= f.input :tel %>
      </div>
      <%= f.simple_fields_for :contact, @user.contact do |c| %>
        <div class="four fields">
          <%= c.input :qq %>
          <%= c.input :title %>
        </div>
        <div class="four fields">
          <%= c.input :fax %>
        </div>
      <% end %>
	</div>
	<div class="footer_btn">
		<%= f.submit '提交', class: 'ui blue mini button' %>
	</div>
<% end %>

<% content_for :scripts do %>
  <script type="text/javascript">
    initProv("#user_company_province", "#user_company_city", "<%= @user.company&.province %>", "<%= @user.company&.city %>");
  	$(".company_name_search.ui.search").search({
        apiSettings: {
          url: '/admin/autocomplete/company?q={query}'
        },
        fields:{
          title: 'valid_name'
        },
        minCharacters : 2,
        onSelect: function(result, response){
          $("#user_company_name_cn").val(result.name_cn);
          $("#user_company_website").val(result.website);
          $("#user_company_company_type").dropdown('set selected', result.company_type);
          $("#user_company_industry").dropdown('set selected', result.industry);
          $("#user_company_company_scale").dropdown('set selected', result.company_scale);
          $("#user_company_auto_trade").dropdown('set selected', ""+result.auto_trade);
          initProv("#user_company_province", "#user_company_city", result.province, result.city);
        }
      });
    $("#edit_user_<%= @user.id %>").form({
      inline : true,
      fields: {
        company_name: {
          identifier: 'user[company][name_cn]',
          rules: [{
            type: 'empty',
            prompt: '请输入公司名称'
          }]
        },
        user_name: {
          identifier: 'user[name]',
          rules: [{
            type: 'empty',
            prompt: '请输入姓名'
          }]
        },
        // user_email: {
        //   identifier: 'user[email]',
        //   rules: [{
        //     type: 'email',
        //     prompt: '请输入邮箱'
        //   }]
        // },
        user_mobile: {
          identifier: 'user[mobile]',
          rules: [{
            type: 'empty',
            prompt: '请输入手机号'
          }]
        }
      }
    });
    $("#user_company_company_type").change(function(){
      if($(this).val() == 'university_org'){
        $("#user_company_auto_trade").parents(".field").show();
      }else{
        $("#user_company_auto_trade").parents(".field").hide();
      }
    });
    $("#user_company_company_type").change();
  </script>
<% end %>