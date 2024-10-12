import React from 'react';
import PropTypes from 'prop-types'

export default function EmojiPicker({ current, alternatives, onChange }) {
  return (
    <div className="relative inline-block">
      <select
        value={current}
        onChange={(e) => onChange(e.target.value)}
        className="text-2xl bg-white border rounded p-1 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <option value={current}>{current}</option>
        {alternatives.map((emoji, i) => (
          <option key={i} value={emoji}>
            {emoji}
          </option>
        ))}
      </select>
    </div>
  );
}

EmojiPicker.propTypes = {
    current: PropTypes.string.isRequired, // 'current' must be a string
    alternatives: PropTypes.arrayOf(PropTypes.string).isRequired, // 'alternatives' must be an array of strings
    onChange: PropTypes.func.isRequired, // 'onChange' must be a function
  };