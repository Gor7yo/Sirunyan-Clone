import './TextBlocks.css'

export const TextBlocks = ({ blocks, name, pathname }) => {
  return (
    <div className="text-block">
      {blocks.map((block) =>
        block.name === name &&  pathname === '/' + block.for ? (
          <>
            <p className="block-title">{block.title}</p>
            <div className="blocks">
              {block.blocks.map((item) => (
                <div className="block-item">
                  <p className="block-item__title">{item.title}</p>
                  <span className="block-item__description">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          " "
        ),
      )}
    </div>
  );
};
