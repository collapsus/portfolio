function ProjectCollection(projectsData){
    this.projectsData = projectsData;
    this.projects = {};
    this.makeDOM();
}

ProjectCollection.prototype.makeDOM = function(){
    var _this = this;
    $.each(_this.projectsData, function(k, v){
        _this.projects[k] = new Project(_this, v);
    });
};
/*
ProjectCollection.prototype.makeCurrent = function(title){
    var _this = this;
    $.each(_this.projectsData, function(k, v){
        if (_this.projects[k].title[0] == title) {
            _this.projects[k].slide.slideToggle("fast");
            _this.projects[k].title.toggleClass("active");
        } else {
            _this.projects[k].slide.slideUp("fast");
            _this.projects[k].title.removeClass("active");
        }
    });
};
*/
