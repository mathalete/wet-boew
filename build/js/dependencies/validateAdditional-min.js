/*!*
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(){function a(b){return b.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[0-9.(),;:!?%#$'"_+=\/-]*/g,"")}jQuery.validator.addMethod("maxWords",function(c,b,d){return this.optional(b)||a(c).match(/\b\w+\b/g).length<d},jQuery.validator.format("Please enter {0} words or less."));jQuery.validator.addMethod("minWords",function(c,b,d){return this.optional(b)||a(c).match(/\b\w+\b/g).length>=d},jQuery.validator.format("Please enter at least {0} words."));jQuery.validator.addMethod("rangeWords",function(c,b,d){return this.optional(b)||a(c).match(/\b\w+\b/g).length>=d[0]&&c.match(/bw+b/g).length<d[1]},jQuery.validator.format("Please enter between {0} and {1} words."))})();jQuery.validator.addMethod("letterswithbasicpunc",function(b,a){return this.optional(a)||/^[a-z-.,()'\"\s]+$/i.test(b)},"Letters or punctuation only please");jQuery.validator.addMethod("alphanumeric",function(b,a){return this.optional(a)||/^\w+$/i.test(b)},"Letters, numbers, spaces or underscores only please");jQuery.validator.addMethod("lettersonly",function(b,a){return this.optional(a)||/^[a-z]+$/i.test(b)},"Letters only please");jQuery.validator.addMethod("nowhitespace",function(b,a){return this.optional(a)||/^\S+$/i.test(b)},"No white space please");jQuery.validator.addMethod("ziprange",function(b,a){return this.optional(a)||/^90[2-5]\d\{2}-\d{4}$/.test(b)},"Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");jQuery.validator.addMethod("integer",function(b,a){return this.optional(a)||/^-?\d+$/.test(b)},"A positive or negative non-decimal number please");jQuery.validator.addMethod("vinUS",function(o){if(o.length!=17){return false}var h,a,l,j,b,k;var c=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"];var m=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9];var g=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];var e=0;for(h=0;h<17;h++){j=g[h];l=o.slice(h,h+1);if(h==8){k=l}if(!isNaN(l)){l*=j}else{for(a=0;a<c.length;a++){if(l.toUpperCase()===c[a]){l=m[a];l*=j;if(isNaN(k)&&a==8){k=c[a]}break}}}e+=l}b=e%11;if(b==10){b="X"}if(b==k){return true}return false},"The specified vehicle identification number (VIN) is invalid.");jQuery.validator.addMethod("dateITA",function(e,c){var a=false;var g=/^\d{1,2}\/\d{1,2}\/\d{4}$/;if(g.test(e)){var i=e.split("/");var d=parseInt(i[0],10);var b=parseInt(i[1],10);var f=parseInt(i[2],10);var h=new Date(f,b-1,d);if((h.getFullYear()==f)&&(h.getMonth()==b-1)&&(h.getDate()==d)){a=true}else{a=false}}else{a=false}return this.optional(c)||a},"Please enter a correct date");jQuery.validator.addMethod("dateNL",function(b,a){return this.optional(a)||/^\d\d?[\.\/-]\d\d?[\.\/-]\d\d\d?\d?$/.test(b)},"Vul hier een geldige datum in.");jQuery.validator.addMethod("time",function(b,a){return this.optional(a)||/^([01]\d|2[0-3])(:[0-5]\d){0,2}$/.test(b)},"Please enter a valid time, between 00:00 and 23:59");jQuery.validator.addMethod("time12h",function(b,a){return this.optional(a)||/^((0?[1-9]|1[012])(:[0-5]\d){0,2}(\ [AP]M))$/i.test(b)},"Please enter a valid time, between 00:00 am and 12:00 pm");jQuery.validator.addMethod("phoneUS",function(a,b){a=a.replace(/\s+/g,"");return this.optional(b)||a.length>9&&a.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number");jQuery.validator.addMethod("phoneUK",function(a,b){return this.optional(b)||a.length>9&&a.match(/^(\(?(0|\+44)[1-9]{1}\d{1,4}?\)?\s?\d{3,4}\s?\d{3,4})$/)},"Please specify a valid phone number");jQuery.validator.addMethod("mobileUK",function(a,b){return this.optional(b)||a.length>9&&a.match(/^((0|\+44)7(5|6|7|8|9){1}\d{2}\s?\d{6})$/)},"Please specify a valid mobile number");jQuery.validator.addMethod("strippedminlength",function(b,a,c){return jQuery(b).text().length>=c},jQuery.validator.format("Please enter at least {0} characters"));jQuery.validator.addMethod("email2",function(b,a,c){return this.optional(a)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(b)},jQuery.validator.messages.email);jQuery.validator.addMethod("url2",function(b,a,c){return this.optional(a)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(b)},jQuery.validator.messages.url);jQuery.validator.addMethod("creditcardtypes",function(b,a,c){if(/[^0-9-]+/.test(b)){return false}b=b.replace(/\D/g,"");var d=0;if(c.mastercard){d|=1}if(c.visa){d|=2}if(c.amex){d|=4}if(c.dinersclub){d|=8}if(c.enroute){d|=16}if(c.discover){d|=32}if(c.jcb){d|=64}if(c.unknown){d|=128}if(c.all){d=1|2|4|8|16|32|64|128}if(d&1&&/^(51|52|53|54|55)/.test(b)){return b.length==16}if(d&2&&/^(4)/.test(b)){return b.length==16}if(d&4&&/^(34|37)/.test(b)){return b.length==15}if(d&8&&/^(300|301|302|303|304|305|36|38)/.test(b)){return b.length==14}if(d&16&&/^(2014|2149)/.test(b)){return b.length==15}if(d&32&&/^(6011)/.test(b)){return b.length==16}if(d&64&&/^(3)/.test(b)){return b.length==16}if(d&64&&/^(2131|1800)/.test(b)){return b.length==15}if(d&128){return true}return false},"Please enter a valid credit card number.");jQuery.validator.addMethod("ipv4",function(b,a,c){return this.optional(a)||/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(b)},"Please enter a valid IP v4 address.");jQuery.validator.addMethod("ipv6",function(b,a,c){return this.optional(a)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(b)},"Please enter a valid IP v6 address.");jQuery.validator.addMethod("pattern",function(b,a,c){return this.optional(a)||c.test(b)},"Invalid format.");