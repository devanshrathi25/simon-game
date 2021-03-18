const btn = document.querySelector('button');
const myaudio1 = document.querySelector('#myAudio1');
const myaudio2 = document.querySelector('#myAudio2');
const myaudio3 = document.querySelector('#myAudio3');
const myaudio4 = document.querySelector('#myAudio4');
const score1 = document.querySelector('#level1');
const score2 = document.querySelector('#level2');
const score3 = document.querySelector('#level3');
const score4 = document.querySelector('#level4');
const gameOver = document.querySelector('#gameOver');
let highScore = 0;
btn.addEventListener('click', DB);
function DB() {
    gameOver.style.display = "none";
    gameOver.innerText = "Game over!! Try again";
    btn.innerText = 'Lets Play!!';
    btn.style.top = '43%';
    btn.style.marginLeft = '49%'
    btn.disabled = true;
    let colors = [];
    let maxLevel = 20;
    let flag = 0;
    const divs = document.querySelectorAll("div");
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function func(color) {

        if (color == 1) {
            const div = document.querySelector('#red');
            div.style.backgroundColor = '#ff4d00';
            myaudio1.play();
        }
        else if (color == 2) {
            const div = document.querySelector('#green');
            div.style.backgroundColor = '#55ff00';
            myaudio2.play();
        }
        else if (color == 3) {
            const div = document.querySelector('#blue');
            div.style.backgroundColor = '#00d9ff';
            myaudio3.play();
        }
        else if (color == 4) {
            const div = document.querySelector('#yellow');
            div.style.backgroundColor = '#f2ff00';
            myaudio4.play();
        }

    }

    function backToColor(color) {
        if (color == 1) {
            const div = document.querySelector('#red');
            div.style.backgroundColor = '#c23219';
            // myaudio1.pause();
        }
        else if (color == 2) {
            const div = document.querySelector('#green');
            div.style.backgroundColor = '#4b9653';
            // myaudio2.pause();
        }
        else if (color == 3) {
            const div = document.querySelector('#blue');
            div.style.backgroundColor = '#1e94a8';
            // myaudio3.pause();
        }
        else if (color == 4) {
            const div = document.querySelector('#yellow')
            div.style.backgroundColor = '#cccc2b'
            // myaudio4.pause();
        }
    }

    async function main() {
        // maxLevel = 3;
        for (let level = 1; level <= maxLevel; level++) {
            for (let l = 0; l < level; l++) {//random select div
                colors.push(Math.floor(Math.random() * 4) + 1);
            }
            for (let l1 = 0; l1 < level; l1++) { // make user see the color
                await sleep(300);
                func(colors[l1]);
                await sleep(500);
                backToColor(colors[l1]);


            }

            // take input from user and check
            for (let l1 = 0; l1 < level; l1++) {
                let a = null;

                divs[0].addEventListener('click', function (e) {
                    a = e.path[0].id;
                    async function user1() {
                        func(1);
                        await sleep(75);
                        backToColor(1);
                    }
                    user1();
                })
                divs[1].addEventListener('click', function (e) {
                    a = e.path[0].id;
                    async function user2() {
                        func(2);
                        await sleep(75);
                        backToColor(2);
                    }
                    user2();
                })
                divs[2].addEventListener('click', function (e) {
                    a = e.path[0].id;
                    async function user3() {
                        func(3);
                        await sleep(75);
                        backToColor(3);
                    }
                    user3();
                })
                divs[3].addEventListener('click', function (e) {
                    a = e.path[0].id;
                    async function user4() {
                        func(4);
                        await sleep(75);
                        backToColor(4);
                    }
                    user4();
                })

                // await sleep(1000);
                while (a === null) {
                    await sleep(100);
                }
                if ((a === "red") && (colors[l1] === 1)) {
                    colors.slice(0, 1);
                    console.log("win");
                }
                else if ((a === "green") && (colors[l1] === 2)) {
                    colors.slice(0, 1);
                    console.log("win");
                }
                else if ((a === "blue") && (colors[l1] === 3)) {
                    colors.slice(0, 1);
                    console.log("win");
                } else if ((a === "yellow") && (colors[l1] === 4)) {
                    colors.slice(0, 1);
                    console.log("win");
                }
                else {
                    console.log("loss");
                    btn.style.marginLeft = '48.75%'
                    flag = 1;
                    break;
                }


            }
            if (flag === 1) {
                btn.innerText = "Try Again!!";
                score1.innerText = 0;
                score2.innerText = 0;
                btn.disabled = false;
                btn.style.marginLeft = '49%'
                if (highScore < level) {
                    highScore = level;
                    score3.innerText = parseInt((level - 1) / 10);
                    score4.innerText = (level - 1) % 10;
                    console.log(highScore)
                }
                gameOver.style.display = "block";
                break;
            }
            else if (flag === 0) {
                await sleep(200);
                score1.innerText = parseInt(level / 10);
                score2.innerText = level % 10;
                if (level == 20) {
                    gameOver.innerText = "Hey!! You made it."
                    gameOver.style.display = "block";
                }
            }
            colors.splice(0, colors.length);

        }
    }

    main();
}