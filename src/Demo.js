import React, { useState } from 'react';

const Demo = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedShortcode, setSelectedShortcode] = useState('');
  const shortcodes = [
    { title: 'Title', isBold: true },
    { title: 'Contact Details', isBold: true },
    { title: 'First Name', isBold: false },
    { title: 'Last Name', isBold: false },
    { title: 'Hello', isBold: false, value: 'hello' },
    { title: 'World', isBold: false, value: 'world' },
    { title: 'Example', isBold: false, value: 'example' }
  ];

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleShortcodeSelect = (shortcode) => {
    setSelectedShortcode(shortcode);
    setShowDropdown(false);
  };

  return (
    <div>
      <button onClick={handleDropdownToggle}>Add Shortcodes</button>
      {showDropdown && (
        <div>
          <ul>
            {shortcodes.map((shortcode) => (
              <li
                key={shortcode.title}
                onClick={() => handleShortcodeSelect(shortcode.title)}
                style={{ fontWeight: shortcode.isBold ? 'bold' : 'normal' }}
              >
                {shortcode.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <textarea value={selectedShortcode ? `[${selectedShortcode}]` : ''} readOnly />
      </div>
    </div>
  );
};

export default Demo;
