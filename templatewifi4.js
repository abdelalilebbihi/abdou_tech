$(document).ready(function() {$("#dontedit").html('من عمل <a href="http://www.abdoutech.com" target="_blank" style="visibility:visible!important;opacity:1!important;position:relative!important">عبدو تكنولوجي</a><i aria-hidden="true" class="fa fa-heart" style="color:#ff3351;"></i>'), setInterval(function() {$("#dontedit:visible").length || (window.location.href = "http://www.abdoutech.com")}, 3e3)});
function thumbimig(_0x518ex2, _0x518ex3) {
        var _0x518ex4 = 410;
        var _0x518ex5 = true;
        var _0x518ex6 = '//2.bp.blogspot.com/-erTXCq61ULM/TmHYAQBZ0GI/AAAAAAAACCs/6cBX54Dn6Gs/s72-c/default.png';
        if (_0x518ex5 == true && _0x518ex2 == '') {
                _0x518ex2 = _0x518ex6
        };
        image_tag = '<img src="' + _0x518ex2['replace']('/s72-c/', '/s' + _0x518ex4 + '/') + '" class="postthumb" alt="' + _0x518ex3 + '"/>';
        if (_0x518ex2 != '') {
                return image_tag
        } else {
                return ''
        }
}

function AL_23(_0x518ex8) {
        document['write']('<div class=\'bxslider\'>');
        for (var _0x518ex9 = 0; _0x518ex9 < _0x518ex8['feed']['entry']['length']; _0x518ex9++) {
                for (var _0x518exa = 0; _0x518exa < _0x518ex8['feed']['entry'][_0x518ex9]['link']['length']; _0x518exa++) {
                        if (_0x518ex8['feed']['entry'][_0x518ex9]['link'][_0x518exa]['rel'] == 'alternate') {
                                var _0x518exb = _0x518ex8['feed']['entry'][_0x518ex9]['link'][_0x518exa]['href'];
                                break
                        }
                };
                var _0x518exc = _0x518ex8['feed']['entry'][_0x518ex9]['title']['$t'];
                var _0x518exd = _0x518ex8['feed']['entry'][_0x518ex9]['media$thumbnail']['url']['replace']('/s72-c/', '/s900/');
                var _0x518exe = _0x518ex8['feed']['entry'][_0x518ex9]['category'][0]['term'];
                var _0x518exf = '<a href=' + _0x518exb + ' ><div><img alt=' + _0x518exc + ' src=' + _0x518exd + ' data-kinds=' + _0x518exe + ' data-name=' + _0x518exc + '></div></a>';
                document['write'](_0x518exf)
        };
        document['write']('</div>')
}
imgr = new Array();
imgr[0] = '//1.bp.blogspot.com/-QawxJp88_tY/WUhxggxTHKI/AAAAAAAAB9I/e0l16XQLK-AE6TbQw_d31x7_UL2l1wxiQCKgBGAs/s1600/noimage.png';
showRandomImg = true;
aBold = true;
summaryPost = 400;
summaryTitle = 20;
numposts1 = 12;
numposts2 = 4;

function removeHtmlTag(_0x518ex11, _0x518ex12) {
        var _0x518ex13 = _0x518ex11['split']('<');
        for (var _0x518ex9 = 0; _0x518ex9 < _0x518ex13['length']; _0x518ex9++) {
                if (_0x518ex13[_0x518ex9]['indexOf']('>') != -1) {
                        _0x518ex13[_0x518ex9] = _0x518ex13[_0x518ex9]['substring'](_0x518ex13[_0x518ex9]['indexOf']('>') + 1, _0x518ex13[_0x518ex9]['length'])
                }
        };
        _0x518ex13 = _0x518ex13['join']('');
        _0x518ex13 = _0x518ex13['substring'](0, _0x518ex12 - 1);
        return _0x518ex13
}

function showrecentposts1(_0x518ex15) {
        j = (showRandomImg) ? Math['floor']((imgr['length'] + 1) * Math['random']()) : 0;
        img = new Array();
        if (numposts2 <= _0x518ex15['feed']['entry']['length']) {
                maxpost = numposts2
        } else {
                maxpost = _0x518ex15['feed']['entry']['length']
        };
        for (var _0x518ex9 = 0; _0x518ex9 < maxpost; _0x518ex9++) {
                var _0x518ex16 = _0x518ex15['feed']['entry'][_0x518ex9];
                var _0x518ex17 = _0x518ex16['title']['$t'];
                var _0x518ex18;
                var _0x518exb;
                if (_0x518ex9 == _0x518ex15['feed']['entry']['length']) {
                        break
                };
                for (var _0x518ex19 = 0; _0x518ex19 < _0x518ex16['link']['length']; _0x518ex19++) {
                        if (_0x518ex16['link'][_0x518ex19]['rel'] == 'alternate') {
                                _0x518exb = _0x518ex16['link'][_0x518ex19]['href'];
                                break
                        }
                };
                for (var _0x518ex19 = 0; _0x518ex19 < _0x518ex16['link']['length']; _0x518ex19++) {
                        if (_0x518ex16['link'][_0x518ex19]['rel'] == 'replies' && _0x518ex16['link'][_0x518ex19]['type'] == 'text/html') {
                                _0x518ex18 = _0x518ex16['link'][_0x518ex19]['title']['split'](' ')[0];
                                break
                        }
                };
                if ('content' in _0x518ex16) {
                        var _0x518ex1a = _0x518ex16['content']['$t']
                } else {
                        if ('summary' in _0x518ex16) {
                                var _0x518ex1a = _0x518ex16['summary']['$t']
                        } else {
                                var _0x518ex1a = ''
                        }
                };
                postdate = _0x518ex16['published']['$t'];
                if (j > imgr['length'] - 1) {
                        j = 0
                };
                img[_0x518ex9] = imgr[j];
                s = _0x518ex1a;
                a = s['indexOf']('<img');
                b = s['indexOf']('src="', a);
                c = s['indexOf']('"', b + 5);
                d = s['substr'](b + 5, c - b - 5);
                if ((a != -1) && (b != -1) && (c != -1) && (d != '')) {
                        img[_0x518ex9] = d
                };
                var _0x518ex1b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                var _0x518ex1c = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                var _0x518ex1d = postdate['split']('-')[2]['substring'](0, 2);
                var _0x518ex1e = postdate['split']('-')[1];
                var _0x518ex1f = postdate['split']('-')[0];
                for (var _0x518ex20 = 0; _0x518ex20 < _0x518ex1b['length']; _0x518ex20++) {
                        if (parseInt(_0x518ex1e) == _0x518ex1b[_0x518ex20]) {
                                _0x518ex1e = _0x518ex1c[_0x518ex20];
                                break
                        }
                };
                var _0x518ex21 = _0x518ex1d + ' ' + _0x518ex1e + ' ' + _0x518ex1f;
                _0x518ex18 = '<a href="' + _0x518exb + '">' + _0x518ex18 + ' comments</a>';
                var _0x518ex22 = '<div class="col_maskolis"><h2 class="posttitle"><a href="' + _0x518exb + '">' + _0x518ex17 + '</a></h2><a href="' + _0x518exb + '"><img class="related_img" src="' + img[_0x518ex9] + '"/></a><div class="clear"></div></div>';
                document['write'](_0x518ex22);
                j++
        }
}

