Class('App', 'linb.Com',{
    Instance:{
        base:["linb.UI"],
        required:["linb.UI.Div","linb.UI.Link","linb.UI.Button","linb.UI.List","linb.UI.Group"],
        iniComponents:function(){
            // [[code created by jsLinb UI Builder
            var host = this,
                children = [],
                append = function(child){
                    children.push(child.get(0))
                };

            append((new linb.UI.Group)
                .host(host,"group1")
                .setLeft(40)
                .setTop(30)
                .setWidth(540)
                .setCaption("normal")
            );

            host.group1.append((new linb.UI.Link)
                .host(host,"link1")
                .setTips("tips on link")
                .setLeft(40)
                .setTop(10)
                .setCaption("link1")
            );

            host.group1.append((new linb.UI.Button)
                .host(host,"button18")
                .setTips("tips on button")
                .setLeft(110)
                .setTop(10)
            );

            host.group1.append((new linb.UI.List)
                .host(host,"list3")
                .setItems([{"id":"a","caption":"itema","tips":"<strong>Tips</strong><div>on item a</div>"},{"id":"b","caption":"itemb","tips":"<div><strong>photo</strong></div><img src='img/tp.jpg' width=80 height=80/>"},{"id":"c","caption":"itemc","tips":"tips on item c"}])
                .setTips("tips on list")
                .setLeft(280)
                .setTop(0)
                .setHeight(60)
            );

            append((new linb.UI.Group)
                .host(host,"group2")
                .setLeft(40)
                .setTop(150)
                .setWidth(540)
                .setCaption("set tips in onShowTips")
            );

            host.group2.append((new linb.UI.Button)
                .host(host,"button21")
                .setTips("tips on button")
                .setLeft(110)
                .setTop(30)
                .onShowTips("_button21_onshowtips")
            );

            append((new linb.UI.Group)
                .host(host,"group5")
                .setLeft(40)
                .setTop(270)
                .setWidth(540)
                .setCaption("set tips in Custom Function")
            );

            host.group5.append((new linb.UI.Button)
                .host(host,"button26")
                .setTips("tips on button")
                .setLeft(110)
                .setTop(30)
                .onShowTips("_button21_onshowtips")
                .setCustomFunction({"showTips":function (from, node, pos) {
                linb.Tips.show(pos, {tips:"tips set in custom functions"});
                return true;
            }})
            );

            return children;
            // ]]code created by jsLinb UI Builder
        },
        _button21_onshowtips:function (profile, node, pos) {
            linb.Tips.show(pos,{tips:'set this tips on onShowTips'});
            return true;
        }
    }
});