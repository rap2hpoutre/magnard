var app = new Vue({
    el: '#app',
    data: window.webdocData,
    created: function () {
        this.select(this.tabs[0]);
    },
    methods: {
        select: function(tab) {
            this.currentTab = tab;
            this.currentSubTab = tab.subTabs[0] || false; 
        },
        selectSub: function(subTab) {
            this.currentSubTab = subTab; 
        },
        subTabsVisible: function() {
            return this.currentTab.subTabs && 
                   this.currentTab.subTabs.filter(function(s) { return !s.hidden }).length > 1;
        },
        toggle: function(element) {
            element.hidden = !element.hidden;
        }
    }
});