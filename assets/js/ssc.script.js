/*!calc*/function calc(data){var c1C5=data['XLEW_1_5_3'];var c1C4=data['XLEW_1_4_3'];var c1C3=data['XLEW_1_3_3'];var c1C2=data['XLEW_1_2_3'];var c1C9=(((c1C2)*(Math.sin((radians((c1C3)))))));var c1C11=(((24901)*(Math.cos((radians((c1C9)))))));var c1C12=(((c1C11)/(((2)*(Math.PI)))));var c1C14=(((1)-(((c1C5)/(((c1C12)*(5280)))))));var c1C15=(degrees((Math.acos((radians((degrees((c1C14)))))))));var c1C20=(((((c1C15)*(c1C11)))/(360)));var c1C16=(((((360)*(((c1C4)-(c1C20)))))/(c1C11)));var c1C17=(((((c1C12)*(((1)-(Math.cos((radians((c1C16)))))))))*(5280)));var c1C21=(((((c1C17)<(10)))?(((c1C17)*(12))):(c1C17)));var c1D21=(((((c1C17)<(10)))?("inches"):("feet")));data['XLEW_1_21_4']=c1D21;data['XLEW_1_21_3']=c1C21;data['XLEW_1_20_3']=c1C20;};
var eeisus=1;var eetrue="TRUE";var eefalse="FALSE";var eedec=".";var eeth=",";var eedecreg=new RegExp("\\.","g");var eethreg=new RegExp(",","g");var eecurrencyreg=new RegExp("[$]","g");var eepercentreg=new RegExp("%","g");
var co = new Object;
function recalc_onclick(ctl) {ssc.recalcSource = ctl;
  if (true) {


co['XLEW_1_2_3']=eeparseFloat(document.getElementById('XLEW_1_2_3').value);co['XLEW_1_3_3']=eeparseFloat(document.getElementById('XLEW_1_3_3').value);co['XLEW_1_4_3']=eeparseFloat(document.getElementById('XLEW_1_4_3').value);co['XLEW_1_5_3']=eeparseFloat(document.getElementById('XLEW_1_5_3').value);calc(co);if(ssc !== undefined && ssc.realtimesync !== undefined && ssc.realtimesync.connection !== undefined && ssc.realtimesync.connection.readyState == 1){ssc.realtimesync.coUpdate(co,ctl);}else if(ssc !== undefined && ssc.realtimesync !== undefined && ssc.realtimesync.wsUrl && ssc.realtimesync.IsCloseByError && !ssc.realtimesync.IsErrorMsgDialogShown){if(!alert('Realtime-Sync is Disconnected, This Form will not save in server and will not collaborate with your partner.')){ssc.realtimesync.IsErrorMsgDialogShown = true;}}document.getElementById('XLEW_1_20_3').value=eedisplayFloatNDTh(co['XLEW_1_20_3'],2);document.getElementById('XLEW_1_21_3').value=eedisplayFloatND(co['XLEW_1_21_3'],0);document.getElementById('XLEW_1_21_4').value=co['XLEW_1_21_4'];
};};
function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};

function degrees(x){return(x*180)/Math.PI;};

function radians(x){return(x*Math.PI)/180;};

function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};

function eeparseFloat(str){str=String(str).replace(eedecreg,".");var res=parseFloat(str);if(isNaN(res)){return 0;}else{return res;}};

var near0RegExp=new RegExp("[.](.*0000000|.*9999999)");function eedisplayFloat(x){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x);if(near0RegExp.test(str)){x=round(x,8);str=String(x);}return str.replace(/\./g,eedec);}};

function eedisplayFloatND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}}else{return res;}}};

function eedisplayFloatNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');var res2=eeinsertThousand(parts[0].toString());if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(res2+eedec+decimals);}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(res2+eedec+decimals);}}else{return(eeinsertThousand(res.toString()));}}};

function eeinsertThousand(whole){if(whole==""||whole.indexOf("e")>=0){return whole;}else{var minus_sign="";if(whole.charAt(0)=="-"){minus_sign="-";whole=whole.substring(1);};var res="";var str_length=whole.length-1;for(var ii=0;ii<=str_length;ii++){if(ii>0&&ii%3==0){res=eeth+res;};res=whole.charAt(str_length-ii)+res;};return minus_sign+res;}};
function postcode() {
};function TriggerOnchange(hiddenId)
{
    var e = jQuery.Event('change');
    $('#'+hiddenId).trigger(e);
}
function LoadFromQueryString() {var queryStrings = decodeURI(document.location.search), _readonly = !1;queryStrings.indexOf("_readonly") > -1 && (_readonly = !0), queryStrings.length > 0 && $.each(queryStrings.substr(1).split("&"), function (c, q) {var aQueryString = q.split("=");if (2 == aQueryString.length) {var key = aQueryString[0].toString(), value = aQueryString[1].toString();ssc.formBinder.bind(key,value);}})}
function navigate(e){var t=e.keyCode|e.which;if(t!=13&&t!=40&&t!=38)return;var n=$(e.target||e.srcElement);if(n.is("textarea"))return;if(n.is("select")&&(t==38||t==40))return;var r=parseInt(n.attr("data-sheet"),10);var i=parseInt(n.attr("data-row"),10);var s=parseInt(n.attr("data-col"),10);var o=false;var u=$("#sheet-"+r+"");var a='input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea';var f=i+1;var l=i-1;var c=f;var h=l;while(t==40&&f<=c||t==38&&l>=h){var p=u.find(a).filter("[data-sheet="+r+"][data-row="+(t==38?l:f)+"][data-col="+s+"]");if(p.length>0){p.focus();if(p.is("input:text, textarea"))p.select();o=true;break}else{var d;if(u.data("col"+s)==undefined){d=u.find(a).filter("[data-sheet="+r+"][data-col="+s+"]").map(function(){return parseInt($(this).attr("data-row"),10)}).toArray();u.data("col"+s,d)}else{d=u.data("col"+s)}c=d[d.length-1];h=d[0];var v="indexOf"in Array.prototype?d.indexOf(i):$.inArray(i,d);if(t==40&&i<c){f=d[v+1]}else if(t==38&&i>h){l=d[v-1]}else{break}}}if(!o){var m;if(t==38)m=parseInt(n.attr("tabindex"),10)-1;else m=parseInt(n.attr("tabindex"),10)+1;var g=u.find(a).filter("[data-sheet][data-row][data-col][tabindex="+m+"]");if(g.length>0){if(g.is(":radio"))g=g.filter(":checked");if(g.length>0){g.focus();if(g.is("input:text, textarea"))g.select()}}else{var y=u.find(a).filter("[data-sheet][data-row][data-col][tabindex]:first");y.focus();if(y.is("input:text, textarea"))y.select()}}e.preventDefault?e.preventDefault():e.returnValue=false}
/* Finds out if the element is hidden by its parent tr */
                    jQuery.expr[':'].hiddenByParent = function(a) {
                        /* Skip the hidden form elements */
                        if(a.id.startsWith('xl_')) return true;
                        var isHiddenByParent=false;        
                        var elem = $(a);
                        if(elem !=undefined)
                        {
                            /* if the row is hidden */
                            isHiddenByParent = elem.closest("tr[class^='_css']").css('display') != 'none';
                        }

                        if(isHiddenByParent == true)
                        {
                            /* if whole tab is hidden */
                            isHiddenByParent = elem.closest('.tab-pane>div').css('display') != 'none';
                        }
                        return isHiddenByParent;                        
                    };var ssccf1n = function(op,id,css,data1){	
	                switch(op)
	                {
                        						case 'image':                               
                            $('#' + id).attr('src',$('#'+data1).attr('src'));
                        break;
      		
	                }
                }; 
                var ssccf4n = function(op,id,colors,data1,data2,data3,data4){
                    switch(op)
                    {
                           
                    }
                };
                    function calendarCallback(data){
                    var calendarType = $('#' + data.id).data('caltype'); 
                    var datepickerId =  calendarType == 'popup' ?  data.id : 'cal_' +  data.id, $datepicker = $('#' + datepickerId); 
                    var calcDate = data.s1;		
					if($datepicker.data('is-dirty') === undefined){ 						
                        if(calcDate != '' && !isNaN(calcDate)) {
						    $datepicker.datepicker('update', new Date(year(calcDate), eemonth(calcDate)-1, eeday(calcDate)));
                            EE.eeRecalcNeeded = true;						    
                        }
					}
               }

/* Licensed under the SpreadsheetConverter *//*!
 * ssc.script.js
 */
var ssc=ssc||{};ssc.pendingUploads=0;ssc.recalcSource='';ssc.APPNAME='CurveCalc';ssc.exMsg='The fields with the red border are required or invalid.' 
$(window).on('scroll', function() {
                    var $w = $(window);
  $('.position-fixed-x').css('left', $w.scrollLeft());
  $('.position-fixed-y').css('top', $w.scrollTop());
                });
ssc.Dialog={};ssc.Dialog.BeforeSubmitDesc='The form is being submitted.';ssc.Dialog.OfflineHeading='Save until online';ssc.Dialog.OfflineDesc='You are currently offline and the submit failed. Do you want to save the submit and send it later when you are online.';
                ssc.Dialog.OfflineConfirm='Do you want to save?';ssc.Dialog.OfflineSubmitHeading='Offline forms submit confirmation';ssc.Dialog.OfflineSubmitDesc='There are Offline form(s), which are now ready to submit in server.';ssc.Dialog.OfflineSubmitConfirm='Do you want to submit?';
                ssc.Dialog.FailOfflineHeading='Offline Form submit failed';ssc.Dialog.FailOfflineDesc='Unable to connect to the Internet. Please try submitting the offline forms later in internet connection.';ssc.Dialog.OfflineSubmitWait='It may take sometime to finish all submits depending on the size of offline forms and internet connection.';ssc.Dialog.OfflineSubmitWaitCounter='Left';
     var focused=false;
        (function($){
            var calendar_dateFormats = {};
            var defaultDateFmt = 'm/d/yyyy';
            postcode();
ssc.active_sheet_selector = 'div.active > div.container-fluid.ssc-responsive-sheet > div.row > section';

$('a').on('click',function (e) {	
				var href = $(this).attr('href');
				if(href.slice(0,1) == '#'){				
					e.preventDefault();	
                    if(href=='#') return;
					var $target = $(href);
					if($target.length == 0){
						alert('Oops! This link is broken so can not navigate.');
						return;
					}
					focused=false;
					ssc.focusOnElement($target);
				}
			});

                ssc.focusOnElement = function(elem){
                    if(focused) return;
                    focused=true;
                    var tab = elem.parents('.tab-pane');
				    if(!tab.hasClass('active')){
					    $('.nav-tabs a[href="#' + tab.attr('id') + '"]').tab('show');
				    }

				    $('html, body').stop().animate(
				    {
					    'scrollTop': elem.offset().top - 40			
				    }, 
				    900, 
				    'swing', 
				    function () {
					    elem.focus();						
				    });
                }
            var focusCtrl=$('input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea,a.ui-state-active');
			                //to prevent popup dialog to appear in page load.
			                if(focusCtrl!= undefined && focusCtrl.filter(':first').hasClass('form-control')==false){
				                focusCtrl.filter(':first').focus();
			                }
                            //To make readonly elements background transparent
                            $('textarea[readonly],input[type=text][readonly]').css('background','transparent');
        })($);
ssc.checkIfMSIE = function() {
            var a = window.navigator.userAgent,
                b = a.indexOf('MSIE '),
                c = a.indexOf('.NET CLR');
            return !(-1 === b && -1 === c)
        };

            function showValidateMessage(message,title){
                if(toastr){if(title && title.length>0){toastr.error(message,title);}else{toastr.error(message);}}else{alert(message);}
            }
