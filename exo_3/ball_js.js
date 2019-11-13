const ball = document.getElementById('ball');

let state = {
  size: 50,
  backgroundColor: 'green',
};

ball.addEventListener('click', function () {
  state.size = state.size * 2;
  state.backgroundColor = state.backgroundColor === 'green' ? 'red' : 'green';

  ball.style.width = state.size + 'px';
  ball.style.height = state.size + 'px';
  ball.style.backgroundColor = state.backgroundColor;
});

console.log(ball);