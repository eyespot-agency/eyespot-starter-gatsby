---
to: "<%= `src/page-components/${h.changeCase.pascal(page)}/${h.changeCase.pascal(name)}/stories.mdx`%>"
---
<% const componentName = h.changeCase.pascal(name) -%>
<% const componentPath = h.inflection.dasherize(h.inflection.underscore(name)) -%>
<% const componentTitle = h.inflection.humanize(h.inflection.underscore(name)) -%>
<% const pageTitle = h.inflection.humanize(h.inflection.underscore(page)) -%>
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';

import <%= componentName %> from './index';

<Meta
  title="Page components/<%= pageTitle %>/<%= componentTitle %>"
  component={<%= componentName %>}
/>

# <%= componentTitle %>

Stories for a `<%= componentName %>`.

<Canvas>
  <Story name="Name only">
    <<%= componentName %> name="Some name" />
  </Story>
  <Story name="Name with radius">
    <<%= componentName %> name="Some name with radius" radius={4} />
  </Story>
</Canvas>

