import pageImg from "../assets/img/fotogirl.png";
import textBackground from "../assets/img/bkgr-sea.jpg"

const Messages = () => {
  return (
    <>
    <div className="row">
      <div className="col-md-6">
        <img src={pageImg} alt="" width={"100%"}/>
      </div>
      <div className="col-md-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores eveniet reiciendis sint sit nostrum repellat, corrupti magnam pariatur ea provident praesentium nam sequi sunt et inventore necessitatibus! Tenetur, recusandae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae quidem non veniam ex vero doloribus necessitatibus quo! Sunt a eius laborum provident deserunt reiciendis odit aut quas deleniti quibusdam!
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-6 offset-6" style={{backgroundImage: `url(${textBackground})`}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam libero quaerat vel quis ea aliquid velit. Autem ipsa molestias unde ipsum suscipit ducimus ratione? Quaerat id accusantium beatae mollitia commodi?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam libero quaerat vel quis ea aliquid velit. Autem ipsa molestias unde ipsum suscipit ducimus ratione? Quaerat id accusantium beatae mollitia commodi?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam libero quaerat vel quis ea aliquid velit. Autem ipsa molestias unde ipsum suscipit ducimus ratione? Quaerat id accusantium beatae mollitia commodi?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam libero quaerat vel quis ea aliquid velit. Autem ipsa molestias unde ipsum suscipit ducimus ratione? Quaerat id accusantium beatae mollitia commodi?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam libero quaerat vel quis ea aliquid velit. Autem ipsa molestias unde ipsum suscipit ducimus ratione? Quaerat id accusantium beatae mollitia commodi?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam libero quaerat vel quis ea aliquid velit. Autem ipsa molestias unde ipsum suscipit ducimus ratione? Quaerat id accusantium beatae mollitia commodi?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam libero quaerat vel quis ea aliquid velit. Autem ipsa molestias unde ipsum suscipit ducimus ratione? Quaerat id accusantium beatae mollitia commodi?
      </div>
    </div>
    </>
  );
};
export default Messages;