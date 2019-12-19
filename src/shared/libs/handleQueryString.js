const handleQueryString = (name, url = window.location.href) => {
  const formatName = name.replace(/[[]]/g, '\\$&');

  const regex = new RegExp(`[?&]${formatName}(=([^&#]*)|&|#|$)`, 'i');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export default handleQueryString;
