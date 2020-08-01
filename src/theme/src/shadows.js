const elevations = [
  "none",
  /**
   * https://brumm.af/shadows
   * Layers: 3
   * Final transparency: 0.07
   * Final vertical distance: 4px
   * Final blur strength: 24px
   */
  `
    0 0.3px 1.6px rgba(0, 0, 0, 0.028),
    0 0.9px 5.4px rgba(0, 0, 0, 0.042),
    0 4px 24px rgba(0, 0, 0, 0.07)
  `,
  /**
   * https://brumm.af/shadows
   * Layers: 4
   * Final transparency: 0.07
   * Final vertical distance: 12px
   * Final blur strength: 32px
   */
  `
    0 0.5px 1.4px rgba(0, 0, 0, 0.024),
    0 1.5px 4px rgba(0, 0, 0, 0.035),
    0 3.6px 9.6px rgba(0, 0, 0, 0.046),
    0 12px 32px rgba(0, 0, 0, 0.07)
  `,
  /**
   * https://brumm.af/shadows
   * Layers: 5
   * Final transparency: 0.07
   * Final vertical distance: 24px
   * Final blur strength: 48px
   */
  `
    0 0.8px 1.6px rgba(0, 0, 0, 0.022),
    0 2.1px 4.2px rgba(0, 0, 0, 0.031),
    0 4.3px 8.5px rgba(0, 0, 0, 0.039),
    0 8.8px 17.5px rgba(0, 0, 0, 0.048),
    0 24px 48px rgba(0, 0, 0, 0.07)
  `,
  /**
   * https://brumm.af/shadows
   * Layers: 6
   * Final transparency: 0.07
   * Final vertical distance: 32px
   * Final blur strength: 64px
   */
  `
    0 0.9px 1.8px rgba(0, 0, 0, 0.02),
    0 2.1px 4.3px rgba(0, 0, 0, 0.028),
    0 4px 8px rgba(0, 0, 0, 0.035),
    0 7.1px 14.3px rgba(0, 0, 0, 0.042),
    0 13.4px 26.7px rgba(0, 0, 0, 0.05),
    0 32px 64px rgba(0, 0, 0, 0.07)
  `,
];

const shadows = {
  elevations,
};

export default shadows;
