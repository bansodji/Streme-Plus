import React from 'react'

const TruncatedText = ({ text, maxLength }) => {
    if (!text || text.length <= maxLength) {
        return <span>{text}</span>; // If the text is shorter than or equal to the maxLength, display the full text
    }

    const truncated = `${text.substring(0, maxLength)}...`; // Truncate text if it's longer than maxLength

    return <span>{truncated}</span>;
}

export default TruncatedText