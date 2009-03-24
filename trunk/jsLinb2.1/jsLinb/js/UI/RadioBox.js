Class("linb.UI.RadioBox", "linb.UI.List",{
    Initialize:function(){
        //modify default template for shell
        var t = this.getTemplate();
        t.$dynamic={
            items:{
                ITEM:{
                    className:'{itemClass}  {disabled}',
                    style:'{itemStyle}',
                    tagName: 'a',
                    href :linb.$href,
                    tabindex: '{_tabindex}',
                    MARK:{
                        $order:0
                    },
                    ICON:{
                        style:'background:url({image}) transparent  no-repeat {imagePos};{iconDisplay}',
                        className:'ui-icon',
                        $order:1
                    },
                    CAPTION:{
                        text : '{caption}',
                        $order:2
                    }
                }
            }
        };
        this.setTemplate(t);
    },
    Static:{
        Appearances:{
            ITEM:{
               display:linb.$inlineBlock,
               zoom:linb.browser.ie6?1:null,
               'font-family':' "Verdana", "Helvetica", "sans-serif"',
               border:0,
               padding:'4px',
               position:'relative',
               zoom:linb.browser.ie?1:null,
               cursor:'pointer',
               overflow:'hidden',
               'vertical-align':'middle',
               'font-size':'12px'
            },
            'ITEM-checked':{},
            'ITEM-mouseover':{},
            'ITEM-mousedown':{},
            MARK:{
               cursor:'pointer',
               width:'16px',
               height:'16px',
               margin:'0 4px 0 2px',
               'vertical-align':'middle',
               background: linb.UI.$bg('icons.gif', ' no-repeat -145px top', true)
           },
           'ITEM-mouseover MARK':{
                $order:1,
                'background-position':' -145px -17px'
           },
           'ITEM-mousedown MARK':{
                $order:2,
                'background-position':' -145px -34px'
           },
           'ITEM-checked MARK':{
                $order:3,
                'background-position':' -128px top'
           },
           'ITEM-checked-mouseover MARK':{
                $order:4,
                'background-position':' -128px -17px'
           },
           'ITEM-checked-mousedown MARK':{
                $order:5,
                'background-position':' -128px -34px'
            },
            CAPTION:{
                'vertical-align':'middle'
            },
            ITEMS:{
                overflow:'auto',
                'overflow-x': (linb.browser.ie || linb.browser.gek)?'hidden':'',
                position:'relative',
                'line-height':'14px',
                background: 'url('+linb.ini.file_bg+') no-repeat left top'
            }
        }
    }
});
