import { ReactSortable } from "react-sortablejs";


const DragDropArea = ({ title, items, setItems, renderItem }) => {
  const wrappedItems = items.map((id) => ({ id }));

  const handleChange = (newList) => {
    setItems(newList.map((item) => item.id));
  };

  return (
    <div className="droppable-area">
      <strong>{title}</strong>
      <ReactSortable
        list={wrappedItems}
        setList={handleChange}
        animation={200}
        group="pivot"
      >
        {wrappedItems.map((item) => (
          <div key={item.id} className="draggable-item">
            {renderItem ? renderItem(item.id) : item.id}
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default DragDropArea;
