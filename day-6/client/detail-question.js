// Bước 1: Lấy id câu hỏi
const pathName = window.location.pathname;
const idQuestion = pathName.split('/').pop();


// fetch
$.ajax({
  url: `http://localhost:3000/detail-question/${idQuestion}`,
  method: 'GET',
  success: (res) => {
    if (res.success) {
      const question = res.data;
      const { content, yesCount:yes, noCount:no } = question;
      // const content = question.content;
      console.log(question);

      const total = parseInt(yes) + parseInt(no);
      const percentYes = total !== 0 ? (parseInt(yes) / total * 100).toFixed(2) : parseFloat(50).toFixed(2);
      const percentNo = (100 - percentYes).toFixed(2);
      // nhiệm vụ render client :
      $('#contentQuestion').html(content);
      $('#totalVote').html(total);
      $('#percentYes').html(percentYes);
      $('#percentNo').html(percentNo);
    }
  },
  error: (res) => {
    console.log(res);
  } 
})

// console.log(document.getElementById('contentQuestion'))

// console.log($)