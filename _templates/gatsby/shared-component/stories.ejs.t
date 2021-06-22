---
to: "<%= `src/shared/UIKit/${h.changeCase.pascal(name)}/stories.mdx`  %>"
---
<% const componentName = h.changeCase.pascal(name) -%>
<% const componentPath = h.inflection.dasherize(h.inflection.underscore(name)) -%>
<% const componentTitle = h.inflection.humanize(h.inflection.underscore(name)) -%>
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';

import <%= componentName %> from './index';

<Meta
  title="UIKit/<%= componentTitle %>"
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

