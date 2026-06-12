function NewsModal({ isOpen, onClose, article }) {
  if (!isOpen || !article) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <p className="modal-date">{article.date}</p>
        <h2 id="modal-title" className="modal-title">{article.title}</h2>

        {article.content?.map((paragraph, index) => (
          <p key={index} className="modal-paragraph">{paragraph}</p>
        ))}

        {article.sections?.map((section, index) => (
          <div key={index} className="modal-section">
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </div>
        ))}

        {article.link && (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            {article.linkText || 'Read more'}
          </a>
        )}
      </div>
    </div>
  )
}

export default NewsModal
