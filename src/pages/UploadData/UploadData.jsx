import React from 'react';
import { toast } from 'react-toastify';
const UploadData = () => {
  const showSuccess = () => {
    toast.success('Action Succeeded');
  };
  return (
    <div>
      <div className=''>
        <div>
          <div className='group relative z-0 mb-6 w-full'>
            <div className='w- block bg-gray-50 p-2.5 text-sm text-lg  text-gray-500 dark:bg-gray-700 dark:text-white '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              architecto? Quae aliquid ut temporibus a, veniam quam molestiae
              sed facilis expedita minima deserunt eum, nemo eos quidem? Est
              reprehenderit iure incidunt tenetur doloremque! Rem sequi delectus
              consequuntur amet eveniet harum, voluptatum libero eos nostrum
              doloribus, nam illo accusamus! Assumenda laboriosam iure
              consequatur aliquam distinctio voluptatem modi maxime,
              necessitatibus est maiores quo, optio eaque saepe nostrum illo
              expedita tempore at! Animi, voluptate libero. Nisi, nemo.
              Accusantium fugiat laboriosam, voluptatibus, tempora ea aliquid
              porro laudantium nesciunt, obcaecati deleniti hic expedita beatae
              sed nihil provident ad. Voluptatem voluptas distinctio quasi
              perspiciatis in. Eos expedita distinctio eaque iure, quis quaerat
              modi quos blanditiis dolores. Harum dolores quisquam voluptates
              delectus excepturi, amet quam deserunt optio impedit fuga,
              necessitatibus sint, et libero iste nostrum ullam blanditiis
              deleniti at nulla consequuntur. Vel modi tempore corporis sit,
              perspiciatis nulla ullam quas exercitationem cumque dolor.
              Mollitia quae doloribus soluta quidem facere eveniet commodi
              consequatur unde asperiores voluptas odio perspiciatis animi
              laudantium voluptates ea cum sit, exercitationem voluptatum enim
              aspernatur recusandae nisi! Pariatur similique perferendis unde
              cum ratione est. Incidunt sed ea saepe dolor, natus nostrum iusto
              delectus. Totam similique quam porro suscipit ipsa, accusamus,
              architecto tenetur perspiciatis consequatur a consequuntur esse
              temporibus illum praesentium atque. Rem esse illo, perferendis
              exercitationem aut labore laboriosam excepturi ipsa deserunt harum
              vero modi neque, maiores minus ex facilis! Exercitationem quam
              neque corporis aspernatur ipsum nostrum molestias qui, ea, eius
              molestiae velit excepturi. Illo similique veritatis iure ipsam
              praesentium ea corporis. Veniam porro fugiat perspiciatis quae, ea
              placeat laudantium. Vitae officia iure, harum provident aperiam
            </div>
          </div>
          <button
            type='submit'
            className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
            onClick={showSuccess}
          >
            Upload data
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadData;
