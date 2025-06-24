const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
    return (
      <div className="header-box">
            <h1 className="header-box-title">
                {title}
                {type === 'greeting' && (
                    <span className="gradient-text">
                        &nbsp;{user}! 👋
                    </span>
                )}
            </h1>
            <p className="header-box-subtext text-gray-600">{subtext}</p>
      </div>
    )
}
  
export default HeaderBox