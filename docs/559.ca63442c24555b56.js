(self.webpackChunkforms_17=self.webpackChunkforms_17||[]).push([[559],{1559:(f,l,r)=>{r.r(l);var i=r(1562),t=r(5579),o=r(9563);let a=(()=>{class e{constructor(){this.testForm=new o.FormGroup({input1:new o.FormControl,input2:new o.FormControl})}onSubmit(){this.submitted=`Input 1: ${this.testForm.value.input1}, Input 2: ${this.testForm.value.input2}`,console.log("Submitted",this.submitted)}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["ng17-test-ng-forms"]],decls:18,vars:2,consts:[[3,"ngSubmit","formGroup"],["for","input1"],["type","text","id","input1","name","input1","formControlName","input1"],["for","input2"],["type","text","id","input2","name","input2","formControlName","input2"],["type","submit",1,"btn"]],template:function(n,m){1&n&&(t.\u0275\u0275elementStart(0,"p"),t.\u0275\u0275text(1,"This component has a dependency on FormModule."),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(2,"hr"),t.\u0275\u0275elementStart(3,"form",0),t.\u0275\u0275listener("ngSubmit",function(){return m.onSubmit()}),t.\u0275\u0275elementStart(4,"p")(5,"label",1),t.\u0275\u0275text(6,"Input 1 "),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(7,"input",2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"p")(9,"label",3),t.\u0275\u0275text(10,"Input 2 "),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(11,"input",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(12,"p")(13,"button",5),t.\u0275\u0275text(14,"Submit"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275element(15,"br"),t.\u0275\u0275elementStart(16,"p"),t.\u0275\u0275text(17),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(3),t.\u0275\u0275property("formGroup",m.testForm),t.\u0275\u0275advance(14),t.\u0275\u0275textInterpolate1("Submitted values: ",m.submitted,""))},dependencies:[o.\u0275NgNoValidate,o.DefaultValueAccessor,o.NgControlStatus,o.NgControlStatusGroup,o.FormGroupDirective,o.FormControlName],styles:["[_nghost-%COMP%]{flex:1 1 0;padding:16px}"],changeDetection:0})}return e})(),u=(()=>{class e{constructor(){this.title="test-forms"}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["ng17-root"]],decls:1,vars:0,template:function(n,m){1&n&&t.\u0275\u0275element(0,"ng17-test-ng-forms")},dependencies:[a],encapsulation:2})}return e})();var p=r(6809);let c=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.\u0275\u0275defineNgModule({type:e});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({imports:[p.CommonModule,o.ReactiveFormsModule]})}return e})(),d=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.\u0275\u0275defineNgModule({type:e,bootstrap:[u]});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({imports:[i.BrowserModule,c]})}return e})();i.platformBrowser().bootstrapModule(d).catch(e=>console.error(e))}}]);