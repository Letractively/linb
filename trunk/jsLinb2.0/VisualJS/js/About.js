Class('VisualJS.About', 'linb.Com',{
    Instance:{
        customAppend:function(parent){
            var self=this,
                dlg=self.dialog,
                prop = self.properties;
            if(!dlg.get(0).root)
                dlg.render();
            //asy
            dlg.show(parent, true);
        },
        iniComponents:function(){
            // [[code created by jsLinb UI Builder
            var t=this, n=[], u=linb.UI, f=function(c){n.push(c.get(0))};

            f(
            (new u.Dialog)
            .host(t,"dialog")
            .setLeft(250)
            .setTop(150)
            .setHeight(170)
            .setCaption("$VisualJS.menu.about")
            .setResizer(false)
            .setMinBtn(false)
            .setMaxBtn(false)
            .setPinBtn(false)
            .onHotKeydown("_dialog_onhotkey")
            .beforeClose("_dialog2_beforeclose")
            );

            t.dialog.append(
            (new u.Div)
            .host(t,"div12")
            .setLeft(10)
            .setTop(10)
            .setWidth(260)
            .setHeight(80)
            .setHtml("Powered by jsLinb and phpLINB <br />&copy;2006-2008 All rights reserved by <a href=\"mailto:&#108;&#105;&#110;&#98;&#46;&#110;&#101;&#116;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;\">Yingbo Li</a>")
            );

            t.dialog.append(
            (new u.Button)
            .host(t,"button3")
            .setLeft(120)
            .setTop(100)
            .setCaption("O K")
            .setWidth(50)
            .setZIndex("10")
            .onClick("_button3_onclick")
            );

            t.dialog.append(
            (new u.Div)
            .host(t,"div9")
            .setLeft(90)
            .setTop(65)
            .setWidth("120")
            .setHeight("60")
            .setZIndex("8")
            .onRender("_div9_aftercreated")
            .setCustomStyle({"KEY":"background:url(img/logo.gif);cursor:pointer;"})
            );

            return n;
            // ]]code created by jsLinb UI Builder
        },
        _div9_aftercreated:function (profile) {
            profile.root.onClick(function(){
                linb.Dom.submit('http://www.linb.net/VisualJS/');
            });
        },
        _dialog2_beforeclose:function (profile) {
            profile.boxing().hide();
            return false;
        },
        _dialog_onhotkey:function(profile, key, control, shift, alt){
            if(key=='esc')
                profile.boxing().close();
        },
        _button3_onclick:function (profile, e, value) {
            this.dialog.close();
        }
    }
});