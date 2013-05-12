
$(function(){
  $.getJSON("cfg/prod.json",function(data){
     $("#title_id>h2").html(data.prod);
     $("#support_id").html('<p><a href="mailto:' + data.integ + '">Feedback</a></p>'+'<p><a href='+data.new_request_link+'>New Request</p></a>');

     var menus = '<ul class="accordion" data-role="accordion" style="margin:0px">';

     var branches = data.branches;
     $.each(branches,function(i,branch){
       menus += '<li class="bg-color-mybg">';
       var name = branch.name;
       menus = menus + '<a href="#">' + name + '</a><div style="display:none;border:0">';
       var links = branch.links;
       menus += '<ul>';
       $.each(links, function(j,link){
         menus += '<li><a class="menu_link" href='+link.ref+' target="content_frame_name">'+link.name+'</a></li>';
       })
       menus += "</ul></div>";
       menus += "</li>";
     })

     menus += '<li class="bg-color-mybg">';
     menus += '<a href="#">Administration</a><div style="display:none;border:0">';
     menus += '<ul>';
     menus += '<li><a class="menu_link" href=cfg/prod.json target="content_frame_name">prod</a></li>';
     menus += '<li><a class="menu_link" href=cfg/flow target="content_frame_name">flow</a></li>';
     menus += '<li><a class="menu_link" href=cfg/branch target="content_frame_name">branch</a></li>';
     menus += '<li><a class="menu_link" href=detail_template.html target="content_frame_name">detail template</a></li>';
     menus += "</ul></div>";

     menus += "</ul>";
     $("#menu").html(menus);
     $()['Accordion']({initAll: true});
     $("#content_frame_id").attr('src',data.default_page);
  });

});



