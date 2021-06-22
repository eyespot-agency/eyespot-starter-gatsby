---
to: src/page-stories/<%= h.inflection.dasherize(name) %>.stories.mdx
---
<% const pageName = h.changeCase.pascal(name) -%>
<% const pagePath = h.inflection.dasherize(h.inflection.underscore(name)) -%>
<% const pageTitle = h.inflection.humanize(h.inflection.underscore(name)) -%>
import { Meta, Story } from '@storybook/addon-docs/blocks';

import <%= pageName %> from './<%= pagePath %>';

<Meta title="Pages/<%= pageTitle %>" component={<%= pageName %>} />

# <%= pageTitle %>

A story for a sample page component called `<%= pageName %>`.

<Story name="Default">
  <<%= pageName %> />
</Story>


