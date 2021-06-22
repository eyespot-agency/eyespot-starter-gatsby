---
to: "<%= `src/shared/UIKit/${h.changeCase.pascal(name)}/index.scss`  %>"
---
<% const componentNameSelector = h.inflection.dasherize(h.inflection.underscore(name)) -%>
@import '../../styles/_variables.scss';
.<%= componentNameSelector %> {

}

