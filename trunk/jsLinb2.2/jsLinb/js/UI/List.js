Class("linb.UI.List", ["linb.UI", "linb.absList","linb.absValue" ],{
    Instance:{
        _setCtrlValue:function(value){
            return this.each(function(profile){
                if(!profile.renderId)return;

                var box=profile.box,
                    uiv=profile.boxing().getUIValue(),
                    p=profile.properties,
                    item=box._ITEMKEY || 'ITEM',
                    k=box._DIRTYKEY || 'ITEM',
                    getN=function(k,i){return profile.getSubNode(k,i)},
                    getI=function(i){return profile.getSubIdByItemId(i)};
                if(p.selMode=='single'){
                    var itemId = getI(uiv);
                    if(uiv!==null && itemId)
                        getN(k,itemId).tagClass('-mouseover',false).tagClass('-checked',false);

                    itemId = getI(value);
                    if(itemId)
                        getN(k,itemId).tagClass('-mouseover',false).tagClass('-checked');

                    //scroll
                    if(itemId){
                        var o = getN(item,itemId);
                        if(o){
                            var top = o.offsetTop(),
                            items = getN('ITEMS'),
                            sh=items.scrollHeight(),
                            st=items.scrollTop(),
                            hh=items.height()
                            ;
                            if(sh > hh)
                                if(top<st || top>st+hh)
                                    items.scrollTop(top);

                        }
                    }
                }else if(p.selMode=='multi'){
                    uiv = uiv?uiv.split(';'):[];
                    value = value?value.split(';'):[];
                    //check all
                    _.arr.each(uiv,function(o){
                        if(_.arr.indexOf(value,o)==-1)
                            getN(k, getI(o)).tagClass('-mouseover',false).tagClass('-checked',false)
                    });
                    _.arr.each(value,function(o){
                        if(_.arr.indexOf(uiv,o)==-1)
                            getN(k, getI(o)).tagClass('-mouseover',false).tagClass('-checked')
                    });
                }
            });
        },
        adjustSize:function(){
            return this.each(function(profile){
                var items = profile.getSubNode('ITEMS'),pp=profile.properties;
                items.height('auto');
                var h = Math.min(pp.maxHeight, items.offsetHeight());
                pp.height=h;
                items.height(h);
                profile.getRoot().height(h);
            });
        },
        activate:function(){
            return linb.absList.prototype.activate.call(this);
        },
        getShowValue:function(value){
            var profile=this.get(0),
                pro=profile.properties,v,t;
            if(!_.isDefined(value))
                value=pro.$UIvalue;
            if( (v=_.arr.subIndexOf(pro.items,'id',value))!=-1){
                v=pro.items[v].caption;
                v=v.charAt(0)=='$'?linb.getRes(v.slice(1)):v;
            }else
                v='';
            return v;
        },
        _setDirtyMark:function(){
            return this.each(function(profile){
                if(!profile.properties.dirtyMark)return;
                var id=profile.domId,
                    p=profile.properties,
                    flag=p.value !== p.$UIvalue,
                    d=linb.UI.$css_tag_dirty;

                //dirty mark
                if(profile.beforeDirtyMark && false===profile.boxing().beforeDirtyMark(profile,flag)){}
                else{
                    var o = profile.getSubNode('ITEMS');
                    if(flag)
                        o.addClass(d);
                    else
                        o.removeClass(d);
                }
            });
        }
    },
    Static:{
        _DIRTYKEY:'ITEM',
        Templates:{
            tagName : 'div',
            style:'{_style}',
            className:'uibg-base',
            ITEMS:{
               $order:10,
               tagName:'div',
               text:"{items}"
            },
            $submap:{
                items:{
                    ITEM:{
                        className:'{itemClass} {disabled}',
                        style:'{itemStyle}',
                        tagName : 'a',
                        href :linb.$href,
                        tabindex:'{_tabindex}',
                        ICON:{
                            $order:0,
                            className:'ui-icon {imageClass}',
                            style:'{backgroundImage} {backgroundPosition} {imageDisplay}'
                        },
                        CAPTION:{
                            tagName : 'text',
                            text : '{caption}&nbsp;',
                            $order:1
                        }
                    }
                }
            }
        },
        Appearances:{
            KEY:{
                'font-size':'12px'
            },
            ITEMS:{
                position:'relative',
                border:'1px solid #6a92ba',
                overflow:'auto',
                'overflow-x': (linb.browser.ie || linb.browser.gek)?'hidden':''
            },
            ITEM:{
                display:'block',
                zoom:linb.browser.ie?1:null,
                'font-family': '"Verdana", "Helvetica", "sans-serif"',
                border:0,
                cursor:'pointer',
                'font-size':'12px',
                padding:'4px 2px',
                position:'relative'
            },
            'ITEM-mouseover, ITEM-mousedown, ITEM-checked':{
                background: linb.UI.$bg('item.gif', 'repeat-x')
            },
            'ITEM-mouseover':{
                $order:1,
                'background-color':'#FAD200',
                'background-position': 'left -51px'
            },
            'ITEM-mousedown':{
                $order:2,
                'background-color':'#F5D22D',
                'background-position': 'left -101px'
            },
            'ITEM-checked':{
                $order:2,
                'background-color':'#AAD2FA',
                'background-position': 'left top'
            }
        },
        Behaviors:{
            HoverEffected:{ITEM:'ITEM'},
            ClickEffected:{ITEM:'ITEM'},
            DragableKeys:["ITEM"],
            DropableKeys:["ITEM","ITEMS"],
            onSize:function(profile,e){
                var o = profile.getRootNode().style,w=null,h=null;
                if(e.height)h = parseInt(o.height)||w;
                if(e.width)w = parseInt(o.width)||h;
                linb.UI.$tryResize(profile, w, h);
            },
            ITEM:{
                onDblclick:function(profile, e, src){
                    var properties = profile.properties,
                        item = profile.getItemByDom(src);
                    profile.boxing().onDblclick(profile, item, src);
                },
                onClick:function(profile, e, src){
                    var properties = profile.properties,
                        item = profile.getItemByDom(src),
                        itemId =profile.getSubId(src),
                        box = profile.boxing(),
                        ks=linb.Event.getKey(e),
                        rt,rt2;

                    if(properties.disabled|| item.disabled)return false;

                    linb.use(src).focus();
                    
                    switch(properties.selMode){
                    case 'none':
                        rt=box.onItemSelected(profile, item, src);
                        break;
                    case 'multi':
                        var value = box.getUIValue(),
                            arr = value?value.split(';'):[];

                        if(arr.length&&(ks[1]||ks[2]||properties.$checkbox)){
                            //for select
                            rt2=false;
                            if(ks[2]){
                                var items=properties.items,
                                    i1=_.arr.subIndexOf(items,'id',profile.$firstV.id),
                                    i2=_.arr.subIndexOf(items,'id',item.id),
                                    i;
                                arr.length=0;
                                for(i=Math.min(i1,i2);i<=Math.max(i1,i2);i++)
                                    arr.push(items[i].id);
                            }else{
                                if(_.arr.indexOf(arr,item.id)!=-1)
                                    _.arr.removeValue(arr,item.id);
                                else
                                    arr.push(item.id);
                            }

                            arr.sort();
                            value = arr.join(';');

                            //update string value only for setCtrlValue
                            if(box.getUIValue() == value)
                                rt=false;
                            else{
                                box.setUIValue(value);
                                if(box.getUIValue() == value)
                                    rt=box.onItemSelected(profile, item, src)||rt2;
                            }
                            break;
                        }
                    case 'single':
                        if(box.getUIValue() == item.id)
                            rt=false;
                        else{
                            profile.$firstV=item;
                            box.setUIValue(item.id);
                            if(box.getUIValue() == item.id)
                                rt=box.onItemSelected(profile, item, src);
                        }
                        break;
                    }
                    return rt;
                },
                onKeydown:function(profile, e, src){
                    var keys=linb.Event.getKey(e), key = keys[0], shift=keys[2],
                    cur = linb(src),
                    first = profile.getRoot().nextFocus(true, true, false),
                    last = profile.getRoot().nextFocus(false, true, false);

                    switch(linb.Event.getKey(e)[0]){
                        case 'tab':
                            if(shift){
                                if(cur.get(0)!=first.get(0)){
                                    first.focus();
                                    return false;
                                }
                            }else{
                                if(cur.get(0)!=last.get(0)){
                                    last.focus();
                                    return false;
                                }
                            }
                            break;
                        case 'left':
                        case 'up':
                            var next = cur.nextFocus(false, true, false);
                            if(cur.get(0)==first.get(0))
                                last.focus();
                            else
                                cur.nextFocus(false);
                            return false;
                            break;
                        case 'right':
                        case 'down':
                            var next = cur.nextFocus(true, false, false);
                            if(cur.get(0)==last.get(0))
                                first.focus();
                            else
                                cur.nextFocus();
                            return false;
                            break;
                        case 'enter':
                            cur.onClick();
                            return false;
                            break;
                    }
                }
            }
        },
        DataModel:({
            selMode:{
                ini:'single',
                listbox:['single','none','multi']
            },
            width:120,
            height:150,
            maxHeight:300
        }),
        EventHandlers:{
            onDblclick:function(profile, item, src){},
            onItemSelected:function(profile, item, src){}
        },
        _ensureValue:function(profile,value){
            if(profile.properties.selMode=='multi'){
                var arr = (value||"").split(';');
                arr.sort();
                return arr.join(';');
            }else
                return value;
        },
        _onStartDrag:function(profile, e, src, pos){
            var pos=linb.Event.getPos(e);
            linb.use(src).startDrag(e, {
                dragType:'icon',
                shadowFrom:src,
                targetLeft:pos.left+12,
                targetTop:pos.top+12,
                dragCursor:'pointer',
                dragDefer:1,
                dragKey: profile.box.getDragKey(profile, src),
                dragData: profile.box.getDragData(profile, e, src)
            });
            return false;
        },
        _onDropTest:function(profile, e, src, key, data, item){
            var fid=data&&data.domId, tid=linb.use(src).id();
            if(fid){
                if(fid==tid)return false;
                if(_.get(src,['previousSibling','id'])==fid)return false;
            }
        },
        _onDrop:function(profile, e, src, key, data, item){
            linb.DragDrop.setDragIcon('none');

            var k=profile.getKey(linb.use(src).id()),
                po=data.profile,
                ps=data.domId,
                oitem,
                t=linb.absObj.$specialChars;
            //remove
            oitem=_.clone(po.getItemByDom(ps),function(o,i){return !t[(i+'').charAt(0)]});
            po.boxing().removeItems([oitem.id]);

            if(k==profile.keys.ITEM)
                profile.boxing().insertItems([oitem], item.id, true);
            else
                profile.boxing().insertItems([oitem]);

            return false;
        },
        _onresize:function(profile,width,height){
            var t=profile.properties,
                temp,
                l=profile.getSubNode('ITEMS')
            ;
            //no height set
            if(!parseInt(profile.getRootNode().style.height))
                return;
            l.height(height);
        }
    }
});