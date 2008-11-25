Class('App.linb_UI_Group', 'linb.Com',{
    Instance:{
        iniComponents:function(){
            // [[code created by jsLinb UI Builder
            var host=this, children=[], append=function(child){children.push(child.get(0))};
            
            append((new linb.UI.Group)
                .host(host,"group2")
                .setTips("this is group2")
                .setLeft(40)
                .setTop(20)
                .setWidth(200)
                .setHeight(150)
                .setCaption("group2")
                .setIcon("img/demo.gif")
            );
            
            host.group2.append((new linb.UI.Input)
                .host(host,"input2")
                .setLeft(24)
                .setTop(64)
            );
            
            host.group2.append((new linb.UI.Button)
                .host(host,"button1")
                .setLeft(24)
                .setTop(24)
                .setCaption("button1")
            );
            
            append((new linb.UI.Group)
                .host(host,"group3")
                .setLeft(270)
                .setTop(20)
                .setWidth(370)
                .setHeight(150)
                .setCaption("group3")
                .setToggleBtn(false)
            );
            
            host.group3.append((new linb.UI.Group)
                .host(host,"group5")
                .setLeft(170)
                .setTop(10)
                .setWidth(120)
                .setHeight(108)
                .setCaption("group5")
            );
            
            host.group3.append((new linb.UI.Group)
                .host(host,"group4")
                .setLeft(30)
                .setTop(10)
                .setWidth(110)
                .setHeight(108)
                .setCaption("group4")
                .setToggleBtn(false)
            );
            
            append((new linb.UI.Pane)
                .host(host,"panel3")
                .setLeft(40)
                .setTop(200)
                .setWidth(200)
                .setHeight(160)
            );
            
            host.panel3.append((new linb.UI.Group)
                .host(host,"fieldset1")
                .setWidth("auto")
                .setHeight("auto")
                .setPosition("relative")
                .setCaption("height:auto")
            );
            
            host.fieldset1.append((new linb.UI.Pane)
                .host(host,"panel12")
                .setLeft(10)
                .setWidth(170)
                .setHeight(90)
                .setPosition("relative")
            );
            
            host.panel12.append((new linb.UI.Button)
                .host(host,"button14")
                .setLeft(30)
                .setTop(30)
                .setCaption("button14")
            );
            
            append((new linb.UI.Group)
                .host(host,"group9")
                .setLeft(270)
                .setTop(200)
                .setWidth(370)
                .setCaption("fold")
                .setToggle(false)
            );
            
            return children;
            // ]]code created by jsLinb UI Builder
        }, 
        base:[], 
        required:["linb.UI.Group", "linb.UI.Input", "linb.UI.Button", "linb.UI.Pane"]
    }
});