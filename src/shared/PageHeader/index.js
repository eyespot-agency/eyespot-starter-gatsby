/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageHeader({ siteTitle }) {
  return (
    <header className="page-header">
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
};

PageHeader.defaultProps = {
  siteTitle: '',
};

export default PageHeader;
