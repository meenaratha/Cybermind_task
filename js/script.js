document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.querySelector('.select-selected');
    var itemsElement = document.querySelector('.select-items');

    selectElement.addEventListener('click', function(e) {
        e.stopPropagation();
        itemsElement.classList.remove('select-hide');
        selectElement.classList.toggle('select-arrow-active');
    });

    var options = itemsElement.querySelectorAll('.option');

    options.forEach(function(option) {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            selectElement.innerHTML = option.innerHTML;
            itemsElement.classList.add('select-hide');
            selectElement.classList.remove('select-arrow-active');
        });
    });

    document.addEventListener('click', function() {
        itemsElement.classList.add('select-hide');
        selectElement.classList.remove('select-arrow-active');
    });
    itemsElement.addEventListener('mouseleave', function(){
        itemsElement.classList.add('select-hide');
         selectElement.classList.toggle('select-arrow-active');
    });
});


// model open close logic

const modelContainer = document.getElementById('modal-container');
const modalCloseBtn = document.getElementById('close-btn');
const modalOpenBtn = document.getElementById('open-modal-btn');

modalCloseBtn.addEventListener('click', function(){
    modelContainer.classList.add('hide');
    modalOpenBtn.classList.add('show');
});

modalOpenBtn.addEventListener('click', function(){
    modelContainer.classList.remove('hide');
    modalOpenBtn.classList.remove('show');
});



// comment
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsContainer = document.getElementById('commentsContainer');
    const mainDeleteBtn = document.querySelector('.main-delete');
    const inputContainer = document.querySelector('.commend-input');

   
    const initialComments = [
        {
            "username": "John Doe",
            "comment": "Thanks for Assigning me on the task. We'll get the details ironed out",
            "profileImg": "images/profile1.jpeg"
        },
        {
            "username": "John Doe",
            "comment": "Thanks for Assigning me on the task. We'll get the details ironed out",
            "profileImg": "images/profile1.jpeg"
        }
    ];
    
    function addComment(username, commentText, profileImg) {
        const commentItem = document.createElement('div');
        commentItem.classList.add('commend-item');

        const img = document.createElement('img');
        img.src = profileImg;
        img.alt = '';

        const commentTextDiv = document.createElement('div');
        commentTextDiv.classList.add('commend-text');

        const span = document.createElement('span');
        span.textContent = username;

        const p = document.createElement('p');
        p.classList.add('commend-display');
        p.textContent = commentText;

        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-btn', 'hide');
        deleteBtn.innerHTML = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px"><g fill="#e92c2c" fill-rule="nonzero" stroke="rgb(233, 44, 44)" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M21,0c-1.64453,0 -3,1.35547 -3,3v2h-7.8125c-0.125,-0.02344 -0.25,-0.02344 -0.375,0h-1.8125c-0.03125,0 -0.0625,0 -0.09375,0c-0.55078,0.02734 -0.98047,0.49609 -0.95312,1.04688c0.02734,0.55078 0.49609,0.98047 1.04688,0.95313h1.09375l3.59375,40.5c0.125,1.39844 1.31641,2.5 2.71875,2.5h19.1875c1.40234,0 2.59375,-1.10156 2.71875,-2.5l3.59375,-40.5h1.09375c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-10v-2c0,-1.64453 -1.35547,-3 -3,-3zM21,2h8c0.5625,0 1,0.4375 1,1v2h-10v-2c0,-0.5625 0.4375,-1 1,-1zM11.09375,7h27.8125l-3.59375,40.34375c-0.03125,0.34766 -0.40234,0.65625 -0.71875,0.65625h-19.1875c-0.31641,0 -0.6875,-0.30859 -0.71875,-0.65625zM18.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM24.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM30.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z"></path></g></g></svg>';
        deleteBtn.addEventListener('click', () => {
            commentItem.remove();
        });
        // edit
           let currentCommend =null;
        //    const editJsonText = document.querySelector('.commend-display');
           commentItem.addEventListener('dblclick', function(){
            commentItem.classList.add('edit-bg');
            currentCommend = p;
            const oldJsonText = p.innerText;
            commentInput.value = oldJsonText ;
            inputContainer.classList.add('focus');
            });
            // update
            commentInput.addEventListener('blur', function() {
                if (currentCommend) {
                    currentCommend.innerText = commentInput.value.trim();
                    currentCommend = "";
                    commentInput.value = "";
                    inputContainer.classList.remove('focus');

                   
                }
            });

            commentInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    commentInput.blur();
                }
            });

            commentItem.addEventListener('mouseleave', function(){
                commentItem.classList.remove('edit-bg');

            });
        //  edit and update end

        commentTextDiv.appendChild(span);
        commentTextDiv.appendChild(p);

        commentItem.appendChild(img);
        commentItem.appendChild(commentTextDiv);
        commentItem.appendChild(deleteBtn);

        commentsContainer.appendChild(commentItem);

        
    }

    // Load initial comments
    initialComments.forEach(comment => {
        addComment(comment.username, comment.comment, comment.profileImg);
    });
    

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
           
            const commendItem = document.createElement('div');
           commendItem.classList.add('commend-item');
           const img = document.createElement('img');
           img.src = 'images/profile1.jpeg';
           img.alt = '';
           const commendTextDiv = document.createElement('div');
           commendTextDiv.classList.add('commend-text');
           const span = document.createElement('span');
           span.textContent = 'John Doe';

           const p = document.createElement('p');
          p.classList.add('comment-display');
          p.textContent = commentText;

        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-btn', 'hide');
        deleteBtn.innerHTML = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px"><g fill="#e92c2c" fill-rule="nonzero" stroke="rgb(233, 44, 44)" stroke-width="2" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M21,0c-1.64453,0 -3,1.35547 -3,3v2h-7.8125c-0.125,-0.02344 -0.25,-0.02344 -0.375,0h-1.8125c-0.03125,0 -0.0625,0 -0.09375,0c-0.55078,0.02734 -0.98047,0.49609 -0.95312,1.04688c0.02734,0.55078 0.49609,0.98047 1.04688,0.95313h1.09375l3.59375,40.5c0.125,1.39844 1.31641,2.5 2.71875,2.5h19.1875c1.40234,0 2.59375,-1.10156 2.71875,-2.5l3.59375,-40.5h1.09375c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-10v-2c0,-1.64453 -1.35547,-3 -3,-3zM21,2h8c0.5625,0 1,0.4375 1,1v2h-10v-2c0,-0.5625 0.4375,-1 1,-1zM11.09375,7h27.8125l-3.59375,40.34375c-0.03125,0.34766 -0.40234,0.65625 -0.71875,0.65625h-19.1875c-0.31641,0 -0.6875,-0.30859 -0.71875,-0.65625zM18.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM24.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM30.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z"></path></g></g></svg>';
         
        deleteBtn.addEventListener('click', () => {
                    commendItem.remove();
         });
         //  edit 
          let currentComment =null;
           const editText = document.querySelector('.comment-display');
           commendItem.addEventListener('dblclick', function(){
            currentComment = p;
            const oldText = p.innerText;
            commentInput.value = oldText ;
            inputContainer.classList.add('focus');
            });
            // update
            commentInput.addEventListener('blur', function() {
                if (currentComment) {
                    currentComment.innerText = commentInput.value;
                    currentComment = "";
                    commentInput.value = "";
                    inputContainer.classList.remove('focus');
                   
                }
            });

            commentInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    commentInput.blur();
                }
            });
        //  edit and update end
            commendTextDiv.appendChild(span);
            commendTextDiv.appendChild(p);

            commendItem.appendChild(img);
            commendItem.appendChild(commendTextDiv);
            commendItem.appendChild(deleteBtn);

            commentsContainer.appendChild(commendItem);
             // Clear the comment input field
              commentInput.value = '';

           
        }

       
    });
// edit


    
    mainDeleteBtn.addEventListener('click', function() {
        document.querySelectorAll('.delete-btn').forEach((btn) => {
            btn.classList.toggle('show');
            btn.classList.toggle('hide');
            btn.classList.toggle('delete-btn-left');
        });
    });

    mainDeleteBtn.addEventListener('dblclick', function() {
        document.querySelectorAll('.delete-btn').forEach((btn) => {
            btn.classList.remove('show');
            btn.classList.add('hide');
            btn.classList.remove('delete-btn-left');
        });
    });
    
    
});

// end comment

// show delete button

// const mainDeleteBtn = document.querySelector('.main-delete');
// const deleteBtn = document.querySelectorAll('.delete-btn');

// mainDeleteBtn.addEventListener('click', function() {
//     deleteBtn.forEach((btn) => {
//         btn.classList.add('show');
//         btn.classList.remove('hide');
//         btn.classList.add('delete-btn-left');

//     });
// });

// mainDeleteBtn.addEventListener('dblclick', function() {
//     deleteBtn.forEach((btn) => {
//         btn.classList.remove('show');
//         btn.classList.remove('delete-btn-left');

//     });
// });


