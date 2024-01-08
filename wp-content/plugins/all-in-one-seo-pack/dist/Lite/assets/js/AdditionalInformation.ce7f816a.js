import{a as k,u as C,g as O,m as T}from"./links.7c59a081.js";import"./default-i18n.3881921e.js";import{x as l,c as d,C as n,l as p,o as m,a as o,D as g,t as r,b as c,I as P}from"./vue.runtime.esm-bundler.4a881941.js";import{_ as x}from"./_plugin-vue_export-helper.abeb2ae0.js";import{u as R,W as A}from"./Wizard.a901f2cb.js";import{M as L}from"./MaxCounts.12b45bab.js";import{B as U}from"./Phone.3e6f3b99.js";import{B}from"./RadioToggle.91b7eae7.js";import{C as M}from"./ImageUploader.d43e21f9.js";import{C as D}from"./SocialProfiles.bf5a3205.js";import{W as J,a as E,b as H}from"./Header.5afdd8cf.js";import{W as Y}from"./CloseAndExit.e8718706.js";import{_ as G}from"./Steps.095808b3.js";import"./isArrayLikeObject.ab8f4241.js";import"./addons.b148ccf0.js";import"./upperFirst.7faab9f8.js";import"./_stringToArray.4de3b1f3.js";import"./toString.7b877a36.js";import"./preload-helper.27958db9.js";import"./Caret.02d7c74a.js";import"./Img.e7571f79.js";import"./index.43a192b7.js";import"./Plus.72df22c9.js";import"./Checkbox.257a03d8.js";import"./Checkmark.aaedf5f6.js";import"./Textarea.2ff0171c.js";import"./SettingsRow.f729cdc5.js";import"./Row.dbbe567c.js";import"./Twitter.6810a2f7.js";import"./Logo.0d9f9e6e.js";import"./Index.9b37b323.js";const j={setup(){const{strings:a}=R();return{optionsStore:k(),rootStore:C(),setupWizardStore:O(),composableStrings:a}},components:{BasePhone:U,BaseRadioToggle:B,CoreImageUploader:M,CoreSocialProfiles:D,WizardBody:J,WizardCloseAndExit:Y,WizardContainer:E,WizardHeader:H,WizardSteps:G},mixins:[L,A],data(){return{showOtherSocialNetworks:!1,loaded:!1,loading:!1,stage:"additional-information",strings:T(this.composableStrings,{additionalSiteInformation:this.$t.__("Additional Site Information",this.$td),personOrOrganization:this.$t.__("Person or Organization",this.$td),choosePerson:this.$t.__("Choose a Person",this.$td),person:this.$t.__("Person",this.$td),organization:this.$t.__("Organization",this.$td),personOrOrganizationDescription:this.$t.__("Choose whether the site represents a person or an organization.",this.$td),name:this.$t.__("Name",this.$td),organizationName:this.$t.__("Organization Name",this.$td),phone:this.$t.__("Phone Number",this.$td),chooseContactType:this.$t.__("Choose a Contact Type",this.$td),contactType:this.$t.__("Contact Type",this.$td),contactTypeDescription:this.$t.__("Select which team or department the phone number belongs to.",this.$td),logo:this.$t.__("Logo",this.$td),defaultSocialShareImage:this.$t.__("Default Social Share Image",this.$td),yourSocialProfiles:this.$t.__("Your Social Profiles",this.$td),showMore:this.$t.__("Show more",this.$td)})}},watch:{"optionsStore.options.social.profiles":{deep:!0,handler(a){this.setupWizardStore.additionalInformation.social.profiles=a}}},computed:{users(){return[{label:this.$t.__("Manually Enter Person",this.$td),value:"manual"}].concat(this.rootStore.aioseo.users.map(a=>({label:`${a.displayName} (${a.email})`,gravatar:a.gravatar,value:a.id})))}},methods:{getPersonOptions(a){return this.users.find(e=>e.value===a)},getContactTypeOptions(a){return this.$constants.CONTACT_TYPES.find(e=>e.value===a)},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("additionalInformation").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})},showHideOtherSocialNetworks(){this.showOtherSocialNetworks=!this.showOtherSocialNetworks}},mounted(){this.$nextTick(()=>{const a=JSON.parse(JSON.stringify(this.optionsStore.options.searchAppearance)),e=JSON.parse(JSON.stringify(this.optionsStore.options.social));this.setupWizardStore.additionalInformation.social.profiles=JSON.parse(JSON.stringify(e.profiles)),this.setupWizardStore.additionalInformation.socialShareImage=e.facebook.general.defaultImagePosts,this.setupWizardStore.additionalInformation.siteRepresents=a.global.schema.siteRepresents,this.setupWizardStore.additionalInformation.person=a.global.schema.person,this.setupWizardStore.additionalInformation.organizationName=a.global.schema.organizationName,this.setupWizardStore.additionalInformation.organizationLogo=a.global.schema.organizationLogo,this.setupWizardStore.additionalInformation.personName=a.global.schema.personName,this.setupWizardStore.additionalInformation.personLogo=a.global.schema.personLogo,this.setupWizardStore.additionalInformation.phone=a.global.schema.phone,this.setupWizardStore.additionalInformation.contactType=a.global.schema.contactType,this.setupWizardStore.additionalInformation.contactTypeManual=a.global.schema.contactTypeManual,this.loaded=!0})}},q={class:"aioseo-wizard-additional-information"},F={class:"header"},K={class:"person-or-organization aioseo-settings-row no-border no-margin"},Q={class:"settings-name"},X={class:"name small-margin"},Z={class:"aioseo-description"},$={key:0,class:"aioseo-settings-row no-border no-margin"},oo={class:"settings-name"},to={class:"name small-margin"},eo={class:"person-label"},io={key:0,class:"person-avatar"},ao=["src"],so={class:"person-name"},no={class:"person-label"},ro={key:0,class:"person-avatar"},lo=["src"],mo={class:"person-name"},co={key:1,class:"schema-graph-name aioseo-settings-row no-border no-margin"},po={class:"settings-name"},_o={class:"name small-margin"},go={key:2,class:"schema-graph-name aioseo-settings-row no-border no-margin"},ho={class:"settings-name"},uo={class:"name small-margin"},fo={key:3,class:"schema-graph-phone aioseo-settings-row no-border no-margin"},zo={class:"settings-name"},So={class:"name small-margin"},vo={key:4,class:"schema-graph-contact-type aioseo-settings-row no-border no-margin"},Wo={class:"settings-name"},Io={class:"name small-margin"},yo={class:"aioseo-description"},bo={key:5,class:"schema-graph-contact-type-manual aioseo-settings-row no-border no-margin"},wo={class:"settings-name"},No={class:"name small-margin"},Vo={key:6,class:"schema-graph-image aioseo-settings-row no-border no-margin"},ko={class:"settings-name"},Co={class:"name small-margin"},Oo={key:7,class:"schema-graph-image aioseo-settings-row no-border no-margin"},To={class:"settings-name"},Po={class:"name small-margin"},xo={class:"schema-graph-image aioseo-settings-row"},Ro={class:"settings-name"},Ao={class:"name small-margin"},Lo={class:"header social"},Uo={class:"go-back"},Bo=o("div",{class:"spacer"},null,-1);function Mo(a,e,Do,t,s,_){const S=l("wizard-header"),v=l("wizard-steps"),W=l("base-radio-toggle"),f=l("base-select"),h=l("base-input"),I=l("base-phone"),u=l("core-image-uploader"),y=l("core-social-profiles"),z=l("router-link"),b=l("base-button"),w=l("wizard-body"),N=l("wizard-close-and-exit"),V=l("wizard-container");return m(),d("div",q,[n(S),n(V,null,{default:p(()=>[n(w,null,{footer:p(()=>[o("div",Uo,[n(z,{to:t.setupWizardStore.getPrevLink,class:"no-underline"},{default:p(()=>[g("←")]),_:1},8,["to"]),g("   "),n(z,{to:t.setupWizardStore.getPrevLink},{default:p(()=>[g(r(s.strings.goBack),1)]),_:1},8,["to"])]),Bo,n(b,{type:"blue",loading:s.loading,onClick:_.saveAndContinue},{default:p(()=>[g(r(s.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:p(()=>[n(v),o("div",F,r(s.strings.additionalSiteInformation),1),o("div",K,[o("div",Q,[o("div",X,r(s.strings.personOrOrganization),1)]),n(W,{modelValue:t.setupWizardStore.additionalInformation.siteRepresents,"onUpdate:modelValue":e[0]||(e[0]=i=>t.setupWizardStore.additionalInformation.siteRepresents=i),name:"siteRepresents",options:[{label:s.strings.person,value:"person"},{label:s.strings.organization,value:"organization"}]},null,8,["modelValue","options"]),o("div",Z,r(s.strings.personOrOrganizationDescription),1)]),t.setupWizardStore.additionalInformation.siteRepresents==="person"?(m(),d("div",$,[o("div",oo,[o("div",to,r(s.strings.choosePerson),1)]),n(f,{class:"person-chooser",options:_.users,modelValue:_.getPersonOptions(t.setupWizardStore.additionalInformation.person),"onUpdate:modelValue":e[1]||(e[1]=i=>t.setupWizardStore.additionalInformation.person=i.value)},{singleLabel:p(({option:i})=>[o("div",eo,[i.gravatar?(m(),d("div",io,[o("img",{alt:"User Gravatar",src:i.gravatar},null,8,ao)])):c("",!0),o("div",so,r(i.label),1)])]),option:p(({option:i})=>[o("div",no,[i.gravatar?(m(),d("div",ro,[o("img",{alt:"User Gravatar",src:i.gravatar},null,8,lo)])):c("",!0),o("div",mo,r(i.label),1)])]),_:1},8,["options","modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"?(m(),d("div",co,[o("div",po,[o("div",_o,r(s.strings.organizationName),1)]),n(h,{size:"medium",modelValue:t.setupWizardStore.additionalInformation.organizationName,"onUpdate:modelValue":e[2]||(e[2]=i=>t.setupWizardStore.additionalInformation.organizationName=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents!=="organization"&&t.setupWizardStore.additionalInformation.person==="manual"?(m(),d("div",go,[o("div",ho,[o("div",uo,r(s.strings.name),1)]),n(h,{size:"medium",modelValue:t.setupWizardStore.additionalInformation.personName,"onUpdate:modelValue":e[3]||(e[3]=i=>t.setupWizardStore.additionalInformation.personName=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"?(m(),d("div",fo,[o("div",zo,[o("div",So,r(s.strings.phone),1)]),n(I,{modelValue:t.setupWizardStore.additionalInformation.phone,"onUpdate:modelValue":e[4]||(e[4]=i=>t.setupWizardStore.additionalInformation.phone=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"?(m(),d("div",vo,[o("div",Wo,[o("div",Io,r(s.strings.contactType),1)]),n(f,{size:"medium",options:a.$constants.CONTACT_TYPES,placeholder:s.strings.chooseContactType,modelValue:_.getContactTypeOptions(t.setupWizardStore.additionalInformation.contactType),"onUpdate:modelValue":e[5]||(e[5]=i=>t.setupWizardStore.additionalInformation.contactType=i.value)},null,8,["options","placeholder","modelValue"]),o("div",yo,r(s.strings.contactTypeDescription),1)])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"&&t.setupWizardStore.additionalInformation.contactType==="manual"?(m(),d("div",bo,[o("div",wo,[o("div",No,r(s.strings.contactType),1)]),n(h,{size:"medium",modelValue:t.setupWizardStore.additionalInformation.contactTypeManual,"onUpdate:modelValue":e[6]||(e[6]=i=>t.setupWizardStore.additionalInformation.contactTypeManual=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents==="organization"?(m(),d("div",Vo,[o("div",ko,[o("div",Co,r(s.strings.logo),1)]),n(u,{modelValue:t.setupWizardStore.additionalInformation.organizationLogo,"onUpdate:modelValue":e[7]||(e[7]=i=>t.setupWizardStore.additionalInformation.organizationLogo=i)},null,8,["modelValue"])])):c("",!0),t.setupWizardStore.additionalInformation.siteRepresents!=="organization"&&t.setupWizardStore.additionalInformation.person==="manual"?(m(),d("div",Oo,[o("div",To,[o("div",Po,r(s.strings.logo),1)]),n(u,{modelValue:t.setupWizardStore.additionalInformation.personLogo,"onUpdate:modelValue":e[8]||(e[8]=i=>t.setupWizardStore.additionalInformation.personLogo=i)},null,8,["modelValue"])])):c("",!0),o("div",xo,[o("div",Ro,[o("div",Ao,r(s.strings.defaultSocialShareImage),1)]),n(u,{modelValue:t.setupWizardStore.additionalInformation.socialShareImage,"onUpdate:modelValue":e[9]||(e[9]=i=>t.setupWizardStore.additionalInformation.socialShareImage=i)},null,8,["modelValue"])]),o("div",Lo,r(s.strings.yourSocialProfiles),1),s.loaded?(m(),d("div",{key:8,class:P(["social-profiles",{"show-more":s.showOtherSocialNetworks}])},[n(y,{leftSize:"4",rightSize:"8",sameUsernameWidth:"4",hideAdditionalProfiles:""}),o("a",{class:"show-more-link aioseo-col col-md-offset-4",onClick:e[10]||(e[10]=(...i)=>_.showHideOtherSocialNetworks&&_.showHideOtherSocialNetworks(...i))},r(s.strings.showMore),1)],2)):c("",!0)]),_:1}),n(N)]),_:1})])}const zt=x(j,[["render",Mo]]);export{zt as default};
