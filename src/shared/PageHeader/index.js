/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
import PropTypes from 'prop-types';
import { useI18next, Link, useTranslation } from 'gatsby-plugin-react-i18next';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageHeader({ siteTitle }) {
  /* ********************************** HOOKS ********************************* */

  // Localization
  const { languages, originalPath } = useI18next();
  const { t } = useTranslation();

  /* ******************************** RENDERING ******************************* */
  return (
    <header className="page-header">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {t(`layout.header.${lng}`)}
            </Link>
          </li>
        ))}
      </ul>
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
