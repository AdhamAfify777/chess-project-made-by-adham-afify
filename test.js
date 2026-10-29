"use strict";

/* =========================================
   1. إعدادات الاختبار
   ========================================= */

// أسماء الأقسام التي سيظهر أداؤها في التقرير النهائي.
const CATEGORIES = [
    "Calculation",
    "Tactics",
    "Positional Play",
    "Checkmate Patterns",
    "Endgames",
    "Attacking Skills",
    "Defense"
];

// لون القطع التي سيحركها اللاعب في الاختبار.
const PLAYER_COLOR = "w";

// عدد المحاولات
let attempts= 0;
const MAX_ATTEMPTS = 3;


/* =========================================
   2. مكان إضافة ألغازك
   ========================================= */

const puzzles = [
   {
    id: 1,
    category: "Calculation",
    playerColor:"b",
    fen: "r2qr1k1/1b1n1p1p/pp1Q1np1/2pp4/3P4/2N1P3/PP1B1PPP/1BR2RK1 b - - 0 1",
    solution: [
        { from: "e8", to: "e5" },
        { from: "d4", to: "e5" },
        { from: "f6", to: "e8" }
    ],
    title: "Calculate the Variation",
    description: "Find the best continuation and calculate the resulting position."
},

{
   id: 2,
    category: "Calculation",
    playerColor:"b",
    fen: "r3r3/5Rpp/p1k5/P1p5/7N/2p3P1/5P1P/3R2K1 b - - 0 1",
    solution: [
        { from: "c3", to: "c2" },
        { from: "d1", to: "c1" },
        { from: "e8", to: "e1" },
        { from: "c1", to: "e1" },
        { from: "a8", to: "d8" },
    ],
    title: "Calculate the Variation",
    description: "Find the best continuation and calculate the resulting position."
},

{
   id: 3,
    category: "Calculation",
    playerColor:"b",
    fen: "2r3k1/4bppp/p3p3/q1n1P1PP/1pQ2P2/5B2/PPb5/K1NR3R b - - 0 1",
    solution: [
        { from: "a5", to: "a4" },
        { from: "c4", to: "e2" },
        { from: "c5", to: "b3" },
        { from: "c1", to: "b3" },
        { from: "c2", to: "b3" },
    ],
    title: "Calculate the Variation",
    description: "Find the best continuation and calculate the resulting position."
},

{
   id: 4,
    category: "Calculation",
    playerColor:"w",
    fen: "2b2r2/5pk1/1q1p1Np1/p5Q1/1p1PP1P1/7P/1P6/5RK1 w - - 8 5",
    solution: [
        { from: "f6", to: "e8" },
        { from: "f8", to: "e8" },
        { from: "g5", to: "f6" },
        { from: "g7", to: "h6" },
        { from: "g4", to: "g5" },
        { from: "h6", to: "h5" },
        { from: "f6", to: "g7" },
        { from: "h5", to: "g5" },
        { from: "g7", to: "f6" },
        { from: "g5", to: "h6" },
        { from: "f1", to: "f4" },
    ],
    title: "Calculate the Variation",
    description: "Find the best continuation and calculate the resulting position."
},

{
   id: 5,
    category: "Calculation",
    playerColor:"w",
    fen: "4rrk1/p2q2bp/1p4p1/3pn1B1/8/1P3PN1/P2R2PP/3QR1K1 w - - 0 1",
    solution: [
        { from: "e1", to: "e4" },
        { from: "d5", to: "d4" },
        { from: "d2", to: "d4" },
        { from: "d7", to: "c7" },
        { from: "d4", to: "d5" },
        { from: "e5", to: "f7" },
        { from: "d5", to: "d7" },
        { from: "c7", to: "c5" },
        { from: "g5", to: "e3" },
        { from: "c5", to: "a5" },
        { from: "d7", to: "f7" },
    ],
    title: "Calculate the Variation",
    description: "Find the best continuation and calculate the resulting position."
},

{
    id: 6,
    category: "Defense",
    playerColor: "b",
    fen: "2b5/4kP1p/p7/1ppB4/2P5/Pr6/7P/3R3K b - - 0 1",
    solution: [
        { from: "b3", to: "e3" },
        { from: "d1", to: "f1" },
        { from: "e7", to: "f8" },
        { from: "f1", to: "g1" },
        { from: "c8", to: "e6" }
    ],
    title: "Find the Best Defense",
    description: "Find the strongest defensive move to protect your position."
},
{
    id: 7,
    category: "Defense",
    playerColor: "w",
    fen: "6k1/3q2p1/1p5p/2bpr3/3Nr3/P2R1RP1/1P1Q1PKP/8 w - - 0 1",
    solution: [
        { from: "h2", to: "h3" },
        { from: "e5", to: "h5" },
        { from: "g3", to: "g4" },
    ],
    title: "Defend Against the Attack",
    description: "Your opponent is creating threats. Find the best way to defend."
},
{
    id: 8,
    category: "Defense",
    playerColor: "w",
    fen: "8/2r1kp2/5p2/3Q1n2/1P3P2/2p2PP1/5q1P/3R3K w - - 0 1",
    solution: [
        { from: "d5", to: "d8" },
        { from: "e7", to: "e6" },
        { from: "d8", to: "d5" },
        { from: "e6", to: "e7" },
        { from: "d5", to: "d8" }

    ],
    title: "Find the Best Defense",
    description: "Your opponent is creating threats. Find the best way to defend."
},
{
    id: 9,
    category: "Defense",
    playerColor: "b",
    fen: "R7/2q2r1k/6np/1p3p2/4pP2/1P4QP/1B4PK/8 b - - 1 1",
    solution: [
        { from: "c7", to: "c6" },
        { from: "a8", to: "d8" },
        { from: "c6", to: "b6" },
        { from: "d8", to: "c8" },
        { from: "b6", to: "e6" },
    ],
    title: "Save the Position",
    description: "Find the most accurate move to prevent your position from collapsing."
},
{
    id: 10,
    category: "Defense",
    playerColor: "b",
    fen: "3r1r1k/R7/1p3pbb/2p4p/2P1P2q/3Pp2N/4B1P1/Q4R1K b - - 0 1",
    solution: [
        { from: "d8", to: "d4" },
        { from: "h1", to: "h2" },
        { from: "f6", to: "f5" },
        { from: "g2", to: "g3" },
        { from: "h4", to: "f6" }
        
    ],
    title: "Find the Defensive Resource",
    description: "Calculate carefully and find the resource that neutralizes your opponent's threat."
},

{
    id: 11,
    category: "Tactics",
    playerColor: "w",
    fen: "6q1/3r1p2/2N1nk1K/3rp3/8/5PP1/8/1Q1N4 w - - 0 1",
    solution: [
        { from: "b1", to: "f5" },
        { from: "f6", to: "f5" },
        { from: "c6", to: "e7" },
        { from: "d7", to: "e7" },
        { from: "d1", to: "e3" },
        { from: "f5", to: "f6" },
        { from: "e3", to: "d5" },
        { from: "f6", to: "f5" },
        { from: "d5", to: "e7" },
        { from: "f5", to: "f6" },
        { from: "e7", to: "g8" },
        { from: "f6", to: "f5" },
        { from: "g8", to: "e7" },
        { from: "f5", to: "f6" },
        { from: "e7", to: "d5" },
        { from: "f6", to: "f5" },
        { from: "g3", to: "g4" },
    ],
    title: "Find the Tactic",
    description: "Find the best tactical continuation."
},

{
    id: 12,
    category: "Tactics",
    playerColor: "w",
    fen: "r3k2r/1ppq1pbp/p1N1bnp1/3pQ3/B2P1P2/8/PPP3PP/RNB1K2R w KQkq - 0 1",
    solution: [
        { from: "f4", to: "f5" },
        { from: "g6", to: "f5" },
        { from: "c1", to: "h6" }
    ],
    title: "Find the Tactic",
    description: "Find the best tactical continuation."
},

{
    id: 13,
    category: "Tactics",
    playerColor: "b",
    fen: "3k3r/1pp2p2/p1q1bN1p/4P3/2P4n/1P1r1pP1/PQ5P/R1B2RK1 b - - 0 1",
    solution: [
        { from: "f3", to: "f2" },
        { from: "f1", to: "f2" },
        { from: "c6", to: "h1" },
        { from: "g1", to: "h1" },
        { from: "d3", to: "d1" },
        { from: "f2", to: "f1" },
        { from: "d1", to: "f1" }
    ],
    title: "Find the Tactic",
    description: "Find the best tactical continuation."
},

{
    id: 14,
    category: "Tactics",
    playerColor: "b",
    fen: "1k4rr/ppp2p2/5q2/4p3/1PPp1n2/P2P1Q2/R5NP/5R1K b - - 0 1",
    solution: [
        { from: "h8", to: "h2" },
        { from: "h1", to: "h2" },
        { from: "f6", to: "h6" },
        { from: "h2", to: "g1" },
        { from: "f4", to: "h3" },
        { from: "g1", to: "h1" },
        { from: "h3", to: "g5" }
    ],
    title: "Find the Tactic",
    description: "Find the best tactical continuation."
},

{
    id: 15,
    category: "Tactics",
    playerColor: "b",
    fen: "5k2/1p4pP/p7/1p1p2K1/2r5/8/6PP/8 b - - 0 1",
    solution: [
        { from: "c4", to: "h4" },
        { from: "g5", to: "h4" },
        { from: "g7", to: "g5" },
        { from: "h4", to: "g5" },
        { from: "f8", to: "g7" }
    ],
    title: "Find the Tactic",
    description: "Find the best tactical continuation."
},

];
   

/* =========================================
   3. تحديد عناصر الصفحة
   ========================================= */

const elements = {
    quizScreen: document.getElementById("quiz-screen"),
    resultsScreen: document.getElementById("results-screen"),
    emptyScreen: document.getElementById("empty-screen"),

    categoryName: document.getElementById("category-name"),
    questionCounter: document.getElementById("question-counter"),
    progressPercent: document.getElementById("progress-percent"),
    progressBar: document.getElementById("progress-bar"),

    puzzleTitle: document.getElementById("puzzle-title"),
    puzzleDescription: document.getElementById("puzzle-description"),
    feedback: document.getElementById("feedback"),

    resetButton: document.getElementById("reset-button"),
    nextButton: document.getElementById("next-button"),
    restartButton: document.getElementById("restart-button"),

    resultsSummary: document.getElementById("results-summary"),
    overallPercentage: document.getElementById("overall-percentage"),
    scoreDetails: document.getElementById("score-details"),
    categoryResults: document.getElementById("category-results"),
    strengthsList: document.getElementById("strengths-list"),
    weaknessesList: document.getElementById("weaknesses-list")
};

/* =========================================
   4. متغيرات تشغيل الاختبار
   ========================================= */

// game: حالة الشطرنج الحالية.
// board: لوحة الشطرنج التي تظهر على الشاشة.
// currentIndex: رقم اللغز الحالي.
// moveIndex: رقم النقلة المنتظرة في الحل.
// puzzleCompleted: هل أنهى اللاعب اللغز الحالي؟
// isProcessing: يمنع تحريك القطع أثناء رد الخصم التلقائي.

let game = null;
let board = null;
let currentIndex = 0;
let moveIndex = 0;
let puzzleCompleted = false;
let isProcessing = false;

// نخزن نتيجة كل لغز مرة واحدة فقط.
const answeredPuzzles = new Map();

/* =========================================
   5. وظائف مساعدة
   ========================================= */

// التأكد أن النقلة لها صيغة صحيحة.
function isValidMoveFormat(move) {
    return (
        move &&
        typeof move.from === "string" &&
        typeof move.to === "string" &&
        /^[a-h][1-8]$/.test(move.from) &&
        /^[a-h][1-8]$/.test(move.to)
    );
}

// التحقق من بيانات كل لغز قبل بدء الاختبار.
function validatePuzzle(puzzle) {
    if (!puzzle || typeof puzzle !== "object") {
        return false;
    }

    if (
        !Number.isInteger(puzzle.id) ||
        !CATEGORIES.includes(puzzle.category) ||
        typeof puzzle.fen !== "string" ||
        typeof puzzle.title !== "string" ||
        !Array.isArray(puzzle.solution) ||
        puzzle.solution.length === 0
    ) {
        return false;
    }

    if (!puzzle.solution.every(isValidMoveFormat)) {
        return false;
    }

    // نتأكد أن FEN موقف صالح، وأن تسلسل الحل قانوني.
    try {
        const testGame = new Chess(puzzle.fen);

        for (const move of puzzle.solution) {
            const playedMove = testGame.move({
                from: move.from,
                to: move.to,
                promotion: "q"
            });

            if (!playedMove) {
                return false;
            }
        }

        return true;
    } catch (error) {
        return false;
    }
}

// عرض رسالة للاعب وتحديد لونها.
function showFeedback(message, type = "") {
    elements.feedback.textContent = message;
    elements.feedback.className = "feedback";

    if (type) {
        elements.feedback.classList.add(type);
    }
}

// حساب نسبة مئوية.
function percentage(score, total) {
    if (total === 0) {
        return 0;
    }

    return Math.round((score / total) * 100);
}

/* =========================================
   6. تحديث شريط التقدم
   ========================================= */

function updateProgress() {
    const total = puzzles.length;
    const completed = answeredPuzzles.size;
    const progress = percentage(completed, total);

    elements.questionCounter.textContent =
        `Puzzle ${currentIndex + 1} / ${total}`;

    elements.progressPercent.textContent = `${progress}%`;
    elements.progressBar.style.width = `${progress}%`;
}

/* =========================================
   7. إنشاء لوحة الشطرنج
   ========================================= */

function createBoard() {
    // لو فيه لوحة قديمة، نتخلص منها قبل إنشاء الجديدة.
    if (board) {
        board.destroy();
    }

    board = Chessboard("chessboard", {
        position: game.fen(),

        // اتجاه اللوحة حسب لون اللاعب.
       orientation: puzzles[currentIndex].playerColor === "b"
    ? "black"
    : "white",

        // السماح بسحب القطع.
        draggable: true,

        // مكان صور القطع المستخدمة على اللوحة.
        
        pieceTheme: "../libs/chesspieces/{piece}.png",
        
        // منع سحب القطع غير المسموح بها.
        onDragStart: function (source, piece) {
            if (puzzleCompleted || isProcessing || game.game_over()) {
                return false;
            }

         // لون اللاعب في اللغز الحالي
         const playerColor = puzzles[currentIndex].playerColor;

         // اللاعب يحرك قطعه فقط
         if (!piece.startsWith(playerColor)) {
         return false;
        }

           // يجب أن يكون الدور للاعب
           if (game.turn() !== playerColor) {
           return false;
          }
        },

        // يتم استدعاء الوظيفة عند إفلات قطعة.
        onDrop: handlePlayerMove,

        // مزامنة شكل اللوحة مع حالة اللعبة بعد الحركة.
        onSnapEnd: function () {
            board.position(game.fen());
        }
    });
}
console.log("Board created for puzzle:", puzzles[currentIndex].id);
console.log("Board element:", document.getElementById("chessboard"));
/* =========================================
   8. بدء لغز جديد
   ========================================= */

function loadPuzzle() {
    // لو انتهت جميع الألغاز، نعرض التقرير.
    if (currentIndex >= puzzles.length) {
        showResults();
        return;
    }

    const puzzle = puzzles[currentIndex];

    moveIndex = 0;
    puzzleCompleted = false;
    isProcessing = false;
    attempts= 0;

    // إنشاء حالة الشطرنج من الموقف الذي أضفته.
   try {
    game = new Chess(puzzle.fen);
    console.log("Chess game created:", game.fen());
} catch (error) {
    console.error("Puzzle FEN error:", error);
    alert("Puzzle " + puzzle.id + " has an invalid position. Check the Console.");
    return;
}

    console.log("Chess game created:", game.fen());
    // تحديث عنوان القسم والسؤال.
    elements.categoryName.textContent = puzzle.category;
    elements.puzzleTitle.textContent =
        puzzle.title || "Find the best move";

    elements.puzzleDescription.textContent =
        puzzle.description ||
        "Analyze the position and play your move on the board.";

    elements.nextButton.disabled = false;
    elements.nextButton.textContent = "Next Puzzle →";

    showFeedback("Find the best move on the board.");
    updateProgress();
    createBoard();
}

/* =========================================
   9. التعامل مع نقلة اللاعب
   ========================================= */

function handlePlayerMove(source, target) {
    // لا نقبل نقلات بعد إنهاء اللغز.
    if (puzzleCompleted || isProcessing) {
        return "snapback";
    }

    const puzzle = puzzles[currentIndex];
    const expectedMove = puzzle.solution[moveIndex];

    // إذا لم تعد هناك نقلة متوقعة، نرفض الحركة.
    if (!expectedMove) {
        return "snapback";
    }

    // هل اختار اللاعب النقلة الصحيحة؟
    const isCorrect =
        source === expectedMove.from &&
        target === expectedMove.to;

    if (!isCorrect) {
    attempts++;

    if (attempts >= MAX_ATTEMPTS) {
    showFeedback(
        "Three attempts used. Moving to the next puzzle...",
        "error"
    );

    completePuzzle(false);

    isProcessing = true;

    setTimeout(function () {
        isProcessing = false;
        nextPuzzle();
    }, 1200);

    return "snapback";
}

    showFeedback(
        `Incorrect move. ${MAX_ATTEMPTS - attempts} attempts remaining.`,
        "error"
    );

    return "snapback";
}

    // تنفيذ النقلة الصحيحة باستخدام قواعد الشطرنج.
    const move = game.move({
        from: source,
        to: target,
        promotion: "q"
    });

    // احتياطًا، نرفض الحركة لو كانت غير قانونية.
    if (!move) {
        return "snapback";
    }

    moveIndex++;

    // لو انتهى الحل، نحتسب اللغز صحيحًا.
    if (moveIndex >= puzzle.solution.length) {
        completePuzzle(true);
        return;
    }

    // الحركة التالية في الحل مخصصة لرد الخصم التلقائي.
    isProcessing = true;

    showFeedback(
        "Correct move! Playing the opponent's reply...",
        "success"
    );

    // ننتظر لحظة قصيرة حتى يرى اللاعب نقلته.
    setTimeout(function () {
        const reply = puzzle.solution[moveIndex];

        const opponentMove = game.move({
            from: reply.from,
            to: reply.to,
            promotion: "q"
        });

        if (!opponentMove) {
            isProcessing = false;

            showFeedback(
                "There is a problem with this puzzle's solution. Check its moves.",
                "error"
            );

            return;
        }

        moveIndex++;
        board.position(game.fen());

        // إذا اكتمل تسلسل الحل بعد رد الخصم، ينتهي اللغز.
        if (moveIndex >= puzzle.solution.length) {
            completePuzzle(true);
            return;
        }

        isProcessing = false;

        showFeedback(
            "Opponent replied. Find your next move.",
            "success"
        );
    }, 500);
}

/* =========================================
   10. إنهاء اللغز وتسجيل نتيجته
   ========================================= */

function completePuzzle(isCorrect) {
    puzzleCompleted = true;
    isProcessing = false;

    const puzzle = puzzles[currentIndex];

    // لا نسمح بتسجيل نتيجة اللغز أكثر من مرة.
    if (!answeredPuzzles.has(puzzle.id)) {
        answeredPuzzles.set(puzzle.id, {
            category: puzzle.category,
            correct: isCorrect
        });
    }

    if (isCorrect) {
        showFeedback(
            "Excellent! You solved the puzzle correctly.",
            "success"
        );
    } else {
        showFeedback(
            "Puzzle completed.",
            "info"
        );
    }

    elements.nextButton.disabled = false;
    elements.nextButton.textContent =
        currentIndex === puzzles.length - 1
            ? "View Results →"
            : "Next Puzzle →";

    updateProgress();
}

/* =========================================
   11. إعادة المحاولة في اللغز نفسه
   ========================================= */

function resetPuzzle() {
    if (isProcessing) {
        return;
    }

    // نعيد وضع القطع إلى الموقف الأصلي.
    loadPuzzle();
}

/* =========================================
   12. الانتقال إلى اللغز التالي
   ========================================= */

function nextPuzzle() {
    // منع الانتقال لو فيه رد تلقائي للخصم لسه شغال.
    if (isProcessing) {
        return;
    }

    const puzzle = puzzles[currentIndex];

    console.log("Puzzle index:", currentIndex, "Total puzzles:", puzzles.length);
    console.log("Loading puzzle:", puzzle.id);
    console.log("FEN:", puzzle.fen);
    console.log("Puzzle ID:", puzzle.id);
console.log("Player color:", puzzle.playerColor);
console.log("Solution moves:", puzzle.solution);
    // لو اللاعب لم يحل اللغز، نسجله كتخطٍّ.
    if (!puzzleCompleted && !answeredPuzzles.has(puzzle.id)) {
        answeredPuzzles.set(puzzle.id, {
            category: puzzle.category,
            correct: false,
            skipped: true
        });
    }

    // الانتقال للغز التالي.
    currentIndex++;
    loadPuzzle();
}

/* =========================================
   13. حساب النتائج حسب كل قسم
   ========================================= */

 function calculateResults() {
    const results = {};

    // تجهيز نتيجة لكل قسم.
    CATEGORIES.forEach(function (category) {
        results[category] = {
            correct: 0,
            total: 0
        };
    });

    // حساب كل بازل تم تسجيله، حتى لو اتخطى.
    answeredPuzzles.forEach(function (answer) {
        results[answer.category].total++;

        if (answer.correct) {
            results[answer.category].correct++;
        }
    });

    return results;
}

/* =========================================
   14. عرض التقرير النهائي
   ========================================= */

function showResults() {
    elements.quizScreen.hidden = true;
    elements.emptyScreen.hidden = true;
    elements.resultsScreen.hidden = false;

    const results = calculateResults();

    let totalCorrect = 0;
    let totalAnswered = 0;

    // حساب النتيجة العامة.
    Object.values(results).forEach(function (result) {
        totalCorrect += result.correct;
        totalAnswered += result.total;
    });

    const overall = percentage(totalCorrect, totalAnswered);

    elements.overallPercentage.textContent = `${overall}%`;

    elements.scoreDetails.textContent =
        `${totalCorrect} correct out of ${totalAnswered} completed puzzles`;

    elements.resultsSummary.textContent =
        "Here is a breakdown of your performance across the tested chess skills.";

    elements.categoryResults.innerHTML = "";
    elements.strengthsList.innerHTML = "";
    elements.weaknessesList.innerHTML = "";

    const strengths = [];
    const weaknesses = [];

    CATEGORIES.forEach(function (category) {
        const result = results[category];

        // لا نصدر حكمًا على قسم لم تتم إضافة ألغاز له.
        if (result.total === 0) {
            return;
        }

        const score = percentage(result.correct, result.total);

        // إنشاء بطاقة نتيجة القسم.
        const item = document.createElement("div");
        item.className = "result-item";

        item.innerHTML = `
            <div class="result-item-top">
                <h4></h4>
                <span class="result-score"></span>
            </div>

            <div class="result-track">
                <div class="result-fill"></div>
            </div>
        `;

        item.querySelector("h4").textContent = category;

        item.querySelector(".result-score").textContent =
            `${result.correct}/${result.total} (${score}%)`;

        item.querySelector(".result-fill").style.width = `${score}%`;

        elements.categoryResults.appendChild(item);

        /*
          قواعد أولية فقط:
          67% فأكثر = أداء جيد في هذه العينة.
          أقل من 67% = مجال يستحق التدريب.
          مع 3 ألغاز فقط، لا يعتبر هذا حكمًا نهائيًا.
        */
        if (score >= 67) {
            strengths.push(category);
        } else {
            weaknesses.push(category);
        }
    });

    // عرض نقاط القوة.
    if (strengths.length === 0) {
        addListItem(
            elements.strengthsList,
            "More completed puzzles are needed to identify strengths."
        );
    } else {
        strengths.forEach(function (category) {
            addListItem(
                elements.strengthsList,
                `${category}: good performance in this sample.`
            );
        });
    }

    // عرض المجالات التي تحتاج إلى تدريب.
    if (weaknesses.length === 0) {
        addListItem(
            elements.weaknessesList,
            "No weak areas were identified in the completed sample."
        );
    } else {
        weaknesses.forEach(function (category) {
            addListItem(
                elements.weaknessesList,
                `${category}: consider more practice in this area.`
            );
        });
    }

    // لو مفيش بيانات كفاية، نوضح ده للمستخدم.
    if (totalAnswered === 0) {
        elements.resultsSummary.textContent =
            "No puzzle results are available yet.";
    }
}

// إضافة عنصر نصي للقائمة بطريقة آمنة.
function addListItem(list, text) {
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
}

/* =========================================
   15. إعادة الاختبار من البداية
   ========================================= */

function restartTest() {
    currentIndex = 0;
    moveIndex = 0;
    puzzleCompleted = false;
    isProcessing = false;

    // مسح النتائج السابقة.
    answeredPuzzles.clear();

    elements.resultsScreen.hidden = true;
    elements.quizScreen.hidden = false;
    elements.emptyScreen.hidden = true;

    loadPuzzle();
}

/* =========================================
   16. ربط الأزرار بوظائفها
   ========================================= */

elements.resetButton.addEventListener("click", resetPuzzle);
elements.nextButton.addEventListener("click", nextPuzzle);
elements.restartButton.addEventListener("click", restartTest);

/* =========================================
   17. التحقق من المكتبات وبدء الصفحة
   ========================================= */

function initializeTest() {
    // نتأكد أن مكتبات الشطرنج تم تحميلها.
    if (
        typeof Chess === "undefined" ||
        typeof Chessboard === "undefined" ||
        typeof jQuery === "undefined"
    ) {
        elements.quizScreen.hidden = true;
        elements.emptyScreen.hidden = false;

        elements.emptyScreen.querySelector("h2").textContent =
            "Could Not Load the Chessboard";

        elements.emptyScreen.querySelector("p").textContent =
            "Check your internet connection and reload the page. The chess libraries are loaded from external CDNs.";

        return;
    }

    // لو لم يضف المستخدم ألغازًا، لا نبدأ اختبارًا فارغًا.
    if (puzzles.length === 0) {
        elements.quizScreen.hidden = true;
        elements.resultsScreen.hidden = true;
        elements.emptyScreen.hidden = false;
        return;
    }

    // نتحقق من صحة جميع الألغاز قبل البدء.
    const invalidPuzzle = puzzles.find(function (puzzle) {
        return !validatePuzzle(puzzle);
    });

    if (invalidPuzzle) {
        elements.quizScreen.hidden = true;
        elements.emptyScreen.hidden = false;

        elements.emptyScreen.querySelector("h2").textContent =
            "Puzzle Data Needs Checking";

        elements.emptyScreen.querySelector("p").textContent =
            `Please check the FEN and solution moves for puzzle ID ${invalidPuzzle.id}.`;

        return;
    }

  // إظهار شاشة البداية دون بدء الألغاز تلقائيًا.
  elements.emptyScreen.hidden = true;
  elements.resultsScreen.hidden = true;
  elements.quizScreen.hidden = true;

  startScreen.hidden = false;
}

/* =========================================
   شاشة بداية الاختبار
   ========================================= */

const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");

// عند الضغط على Start Assessment
startButton.addEventListener("click", function () {
    startScreen.hidden = true;
    elements.quizScreen.hidden = false;

    // نبدأ الاختبار بأول لغز.
    loadPuzzle();
});

// بدء التشغيل بعد تحميل الصفحة.
initializeTest();