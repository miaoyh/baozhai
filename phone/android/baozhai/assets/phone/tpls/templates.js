﻿/* auto */
+function(){
this.tpls = { 
            gwitem : '<%if(online==1){%><li id="_gw_id_<%=gw_id%>" data-online="<%=online%>" ><%}else{%><li id="_gw_id_<%=gw_id%>" class="gray" data-online="<%=online%>" ><%}%><a href="#" id="_enter_gw" data-gwid="<%=gw_id%>" data-theme="c" data-transition="pop"><img src="img/gw.png"><h2><%=desc%></h2><p>WIFI地址:<%=mac%></p><%if(online==1){%><p id= \'online_state\'>在线</p><%}else{%><p id= \'online_state\' >离线</p><%}%></a><a data-theme="c"  data-gwid="<%=gw_id%>" data-icon="check" id="_action_gw" href="#" ></a></li>'
        };
}.call(this);
