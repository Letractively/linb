Class("linb.UI.PageBar",["linb.UI.iWidget","linb.UI.iNavigator"],{
    Instance:{
        setCtrlValue:function(value){
            return this.each(function(profile){
                if(!profile.domNode)return;
                var t,
                    prop = profile.properties,
                    arr = profile.box._v2a(value),
                    min=arr[0],
                    cur=arr[1],
                    max=arr[2],
                    keys = profile.keys,
                    fun = function(p,k){return p.getSubNode(k)},

                    first = fun(profile, 'FIRST'),
                    pre = fun(profile, 'PRE'),
                    prehide = fun(profile, 'PREM'),
                    current = fun(profile, 'CUR'),
                    next = fun(profile, 'NEXT'),
                    nexthide = fun(profile, 'NEXTM'),
                    last = fun(profile, 'LAST'),

                    change = function(n,i,j){if(i)n.href(prop.uriTpl.replace('*',i));if(j)n.text(prop.textTpl.replace('*',j))},
                    display = function(n,f){n.display(f?'':'none')}
                    ;
                //change href and text
                change(first, min, min);
                change(prehide, '','..' + _.str.repeat('.',String(cur-1-min).length) );
                change(pre, cur-1);
                change(current, cur, cur);
                change(next, cur+1);
                change(nexthide, '','..' + _.str.repeat('.',String(max-cur-1).length) );
                change(last, max, max);

                //show or hide
                if((t=cur-min)<=0){
                    display(first,0);display(prehide,0);display(pre,0);
                }else if(t==1){
                    display(first,1);display(prehide,0);display(pre,0);
                }else if(t==2){
                    display(first,1);display(prehide,0);display(pre,1);
                }else{
                    display(first,1);display(prehide,1);display(pre,1);
                }
                if((t=max-cur)<=0){
                    display(last,0);display(nexthide,0);display(next,0);
                }else if(t==1){
                    display(last,1);display(nexthide,0);display(next,0);
                }else if(t==2){
                    display(last,1);display(nexthide,0);display(next,1);
                }else{
                    display(last,1);display(nexthide,1);display(next,1);
                }
            });
        }
    },
    Static:{
        cssNone:false,
        Templates:{'default':{
            style:'{_style}',
            POOL:{
                style:'position:absolute;display:none;',
                POP:{
                    tagName:'div'
                }
            },
            LABEL:{
                text:'{caption}'
            },
            FIRST:{
                tagName:'a',
                tabindex: '{tabindex}',
                $order:1
            },
            PREM:{
                tagName:'a',
                tabindex: '{tabindex}',
                href:'#',
                $order:2
            },
            PRE:{
                tagName:'a',
                tabindex: '{tabindex}',
                text:'{pre}',
                $order:3
            },
            CUR:{
                tagName:'a',
                tabindex: '{tabindex}',
                $order:4
            },
            NEXT:{
                tagName:'a',
                tabindex: '{tabindex}',
                text:'{next}',
                $order:5
            },
            NEXTM:{
                tagName:'a',
                tabindex: '{tabindex}',
                href:'#',
                $order:6
            },
            LAST:{
                tagName:'a',
                tabindex: '{tabindex}',
                $order:7
            }
        }},
        Appearances:{'default':{
            LABEL:{
                display:'inline',
                'white-space':'nowrap'
            },
            KEY:{
                padding: linb.browser.ie?'3px':'',
                display:'inline'
            },
            'KEY a, POP a':{
                $order:1,
                'font-size':'12px',
                border:'solid 1px gray',
                'padding':'0 3px 0 3px',
                'vertical-align':'middle',
                margin: '3px'
            },
            'PRE,CUR,NEXT':{
                'font-weight' : 'bold'
            },
            CUR:{
                $order:1,
                background:'#316AC5',
                color:'#fff'
            },
            POP:{
                border:'dotted 1px gray',
                background:'#fff',
                position:'absolute',
                padding:'3px',
                'line-height':'22px'
            }
        }},
        Behaviors:{'default':{
            POP:{
                onClick:function(profile, e){return profile.box.cancelLink(e)},
                onMousedown:function(profile, e, src){
                    var o=linb(src)
                        r = linb.event.getSrc(e)
                        ;
                    o.setBlurTrigger(profile.key+":"+profile.$id, null);
                    profile.getSubNode('POOL').addLast(o);
                    if(r.tagName.toLowerCase()=='a'){
                        profile.box._click(profile,r);
                    }
                }
            },
            FIRST:{
                onClick:function(profile, e){return profile.box.cancelLink(e)},
                onMousedown:function(profile, e, src){
                    profile.box._click(profile,src);
                    return false;
                }
            },
            PREM:{
                onClick:function(profile, e){return profile.box.cancelLink(e)},
                onMousedown:function(profile, e, src){
                    profile.box._show(profile,e,src,0);
                    return false;
                }
            },
            PRE:{
                onClick:function(profile, e){return profile.box.cancelLink(e)},
                onMousedown:function(profile, e, src){
                    profile.box._click(profile,src);
                    return false;
                }
            },
            CUR:{
                onClick:function(profile, e){return profile.box.cancelLink(e)},
                onMousedown:function(profile, e, src){
                    profile.box._click(profile,src);
                    return false;
                }
            },
            NEXT:{
                onClick:function(profile, e){return profile.box.cancelLink(e)},
                onMousedown:function(profile, e, src){
                    profile.box._click(profile,src);
                    return false;
                }
            },
            NEXTM:{
                onClick:function(profile, e){return profile.box.cancelLink(e)},
                onMousedown:function(profile, e, src){
                    profile.box._show(profile,e,src,1);
                    return false;
                }
            },
            LAST:{
                onClick:function(profile, e){return profile.box.cancelLink(e)},
                onMousedown:function(profile, e, src){
                    profile.box._click(profile,src);
                    return false;
                }
            }
        }},
        DataModel:{
            dataField:null,
            dataBinder:null,

            caption:' Page: ',
            value:"1:1:1",
            uriTpl:"#*",
            textTpl:"*",
            pre:'&lt;',
            next:'&gt;',
            moreStep:100,

            tabindex:{
                action:function(value){
                    if(this.domNode)
                        this.root.dig('a').tabIndex(value);
                }
            }
        },
        EventHandlers:{
            onClick:function(profile, src){}
        },
        ensureV:function(profile,value){
            var a = value.split(':'),
                b=[],
                fun=function(a){return parseInt(a)||1};
            b[0]=fun(a[0]);
            b[1]=fun(a[1]);
            b[2]=fun(a[2]);

            b[0] = Math.max(b[0],1);
            b[0] = Math.min(b[0],b[1]);
            b[2] = Math.max(b[1],b[2]);

            return b.join(':');
        },
        _v2a:function(v){
            v = typeof v == 'string'? v.split(':') : v;
            v[0]=parseInt(v[0]);v[1]=parseInt(v[1]);v[2]=parseInt(v[2]);
            return v;
        },
        _click:function(profile, src){
            profile.boxing().onClick(profile, src);
        },
        _show:function(profile, e, src, flag){
            var prop = profile.properties,
                arr = profile.box._v2a(prop.value),
                min=arr[0],
                cur=arr[1],
                max=arr[2],

                keys = profile.keys,
                fun = function(p,k){return p.getSubNode(k)},
                pool = fun(profile, 'POOL'),
                pop = fun(profile, 'POP'),
                ceil = function(n){return Math.ceil((n+1)/10)*10},
                a=[],
                t,m,n,i,l
                ;

            if(flag){
                if((t=max-1-cur)<=0)return;
                n=cur + 1;
                l=max;
            }else{
                if((t=cur-1-min)<=0)return;
                n=1;
                l=cur-1;
            }
            m=Math.ceil(t/prop.moreStep);
            if(m>10){
                n=ceil(n);
                l=ceil(l)-1;
                m=ceil(m);
            }else
                n=n+m;
            while(n<l){
                a.push('<a href="'+prop.uriTpl.replace('*',n)+'" onclick="return false">'+prop.textTpl.replace('*',n)+'</a>')
                n=n+m;
            }
            pop.width('auto');
            pop.html(a.join(' '));
            linb(document.body).addLast(pop);
            if(pop.width()>300)pop.width(300);
            pop.popToTop(src);
            pop.setBlurTrigger(profile.key+":"+profile.$id, function(){
                pool.addLast(pop);
            });
        }
    }
});
