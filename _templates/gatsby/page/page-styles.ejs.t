---
to: src/page-styles/<%= h.inflection.dasherize(name) %>.scss
---
<% const pageNameSelector = h.inflection.dasherize(h.inflection.underscore(name)) -%>
@import '../shared/styles/variables';

.<%= pageNameSelector %> {

}


