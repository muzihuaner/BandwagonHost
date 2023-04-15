jQuery(document).ready(function(){jQuery(".tab-content").hide();if(jQuery(location).attr('hash').substr(1)!=""){var activeTab=jQuery(location).attr('hash');jQuery("ul").find('li').removeClass('open');jQuery("ul.nav li").removeClass("active");jQuery(activeTab+"nav").addClass("active");jQuery(activeTab).show();}else{jQuery("#tabs ul.nav .nav-tabs li:first").addClass("active").show();jQuery(".tab-content:first").show();}
jQuery("#tabs ul.nav li").click(function(){jQuery("ul").find('li').removeClass('open');jQuery("ul.nav li").removeClass("active");jQuery(this).addClass("active");var activeTab=jQuery(this).find("a").attr("href");if(activeTab.substr(0,1)=="#"&&activeTab.substr(1)!=""){jQuery(".tab-content").hide();jQuery(activeTab).fadeIn();return false;}else{return true;}});});function toggleCheckboxes(classname){jQuery("."+classname).attr('checked',!jQuery("."+classname+":first").is(':checked'));}
function disableFields(classname,disable){if(disable)jQuery("."+classname).attr("disabled","disabled");else jQuery("."+classname).removeAttr("disabled");}
function popupWindow(addr,popname,w,h,features){var winl=(screen.width-w)/2;var wint=(screen.height-h)/2;if(winl<0)winl=0;if(wint<0)wint=0;var settings='height='+h+',';settings+='width='+w+',';settings+='top='+wint+',';settings+='left='+winl+',';settings+=features;win=window.open(addr,popname,settings);win.window.focus();}
function extraTicketAttachment(){jQuery("#fileuploads").append('<input type="file" name="attachments[]" style="width:70%;" /><br />');}
function rating_hover(id){var selrating=id.split('_');for(var i=1;i<=5;i++){if(i<=selrating[1])document.getElementById(selrating[0]+'_'+i).style.background="url(images/rating_pos.png)";if(i>selrating[1])document.getElementById(selrating[0]+'_'+i).style.background="url(images/rating_neg.png)";}}
function rating_leave(id){for(var i=1;i<=5;i++){document.getElementById(id+'_'+i).style.background="url(images/rating_neg.png)";}}
function rating_select(tid,c,id){window.location='viewticket.php?tid='+tid+'&c='+c+'&rating='+id;}
!function($){"use strict";var toggle='[data-toggle="dropdown"]',Dropdown=function(element){var $el=$(element).on('click.dropdown.data-api',this.toggle)
$('html').on('click.dropdown.data-api',function(){$el.parent().removeClass('open')})}
Dropdown.prototype={constructor:Dropdown,toggle:function(e){var $this=$(this),$parent,selector,isActive
if($this.is('.disabled, :disabled'))return
selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=$(selector)
$parent.length||($parent=$this.parent())
isActive=$parent.hasClass('open')
clearMenus()
if(!isActive)$parent.toggleClass('open')
return false}}
function clearMenus(){$(toggle).parent().removeClass('open')}
$.fn.dropdown=function(option){return this.each(function(){var $this=$(this),data=$this.data('dropdown')
if(!data)$this.data('dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.dropdown.Constructor=Dropdown
$(function(){$('html').on('click.dropdown.data-api',clearMenus)
$('body').on('click.dropdown','.dropdown form',function(e){e.stopPropagation()}).on('click.dropdown.data-api',toggle,Dropdown.prototype.toggle)})}(window.jQuery);