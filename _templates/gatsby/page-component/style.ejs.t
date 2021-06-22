---
to: "<%= `src/page-components/${h.changeCase.pascal(page)}/${h.changeCase.pascal(name)}/index.scss`%>"
---
<% const componentNameSelector = h.inflection.dasherize(h.inflection.underscore(name)) -%>
@import '../../../shared/styles/variables';

.<%= componentNameSelector %> {

}

