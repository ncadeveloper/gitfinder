export const Button = ({ id, onClick, filter, children }) =>   
    <button
        id="language"
        type="button"
        onClick={onClick}
        className={`filter__by ${filter === id && 'active'}`}
    >
        {children}
    </button>