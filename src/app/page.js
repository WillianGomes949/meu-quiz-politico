"use client";

import { useState, useEffect, useMemo } from "react";
import { allQuestions, descriptions } from "../data/questions";

const getShuffledQuestions = () => {
  return allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
};

export default function Home() {
  // Estados existentes
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({});
  const [showResults, setShowResults] = useState(false);

  // ETAPA 1: Novo estado para armazenar as respostas do usuário
  // A chave é o índice da pergunta, o valor é a ideologia escolhida. Ex: {0: 'socialista', 1: 'capitalista'}
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    setQuestions(getShuffledQuestions());
  }, []);

  // Lógicas que já tínhamos (shuffledAnswers e resultInfo)
  const currentQuestion = questions[currentQuestionIndex];
  const shuffledAnswers = useMemo(() => {
    if (!currentQuestion) return [];
    return [...currentQuestion.answers].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const resultInfo = useMemo(() => {
    if (!showResults) return null;
    // ... (esta lógica continua a mesma)
    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    if (sortedScores.length === 0)
      return {
        title: "Nenhuma resposta registrada.",
        descriptions:
          "Por favor, responda algumas perguntas para ver seu perfil.",
      };

    const highestScore = sortedScores[0][1];
    const winners = sortedScores.filter((score) => score[1] === highestScore);

    const formatName = (name) => {
      return name
        .replace("_", " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };

    if (winners.length > 1) {
      const winnerNames = winners.map((w) => formatName(w[0])).join(" e ");
      return {
        title: `Você tem um perfil misto: ${winnerNames}`,
        descriptions:
          "Seu resultado foi um empate. Leia as descrições das ideologias com as quais você mais pontuou para entender melhor suas afinidades!",
      };
    }

    const winnerKey = sortedScores[0][0];
    return {
      title: `Seu perfil pende mais para: ${formatName(winnerKey)}`,
      descriptions: descriptions[winnerKey],
    };
  }, [scores, showResults]);

  // ETAPA 2: A lógica de clique na resposta agora só registra a escolha
  const handleAnswerSelect = (questionIndex, ideology) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: ideology,
    }));
  };

  // ETAPA 3: Novas funções para navegação
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  // ETAPA 4: Função para calcular o placar e finalizar o quiz
  const handleFinishQuiz = () => {
    // Inicializa o placar zerado
    let finalScores = {
      Capitalista: 0,
      Socialista: 0,
      Comunista: 0,
      Democrata: 0,
      Libertário: 0,
    };

    // Itera sobre as respostas do usuário e calcula os pontos
    for (const questionIndex in userAnswers) {
      const ideology = userAnswers[questionIndex];
      if (ideology) {
        finalScores[ideology]++;
      }
    }

    setScores(finalScores); // Atualiza o estado do placar
    setShowResults(true); // Mostra a tela de resultados
  };

  const restartQuiz = () => {
    setQuestions(getShuffledQuestions());
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScores({});
    setShowResults(false);
  };

  // Lógica para os botões
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isAnswerSelected = userAnswers[currentQuestionIndex] !== undefined;

  if (questions.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-3xl">Carregando Quiz...</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4 sm:p-8">
           <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 text-center flex flex-col justify-between min-h-[500px]">
            <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">
          Quiz Político: Você é...
        </h1>
        {showResults ? (
          // TELA DE RESULTADOS (sem grandes alterações na estrutura)
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Seu Resultado:</h2>
            <p className="text-xl text-yellow-300 font-bold mb-6">
              {resultInfo.title}
            </p>

            <div className="w-full text-left mb-6">
              <h3 className="text-lg font-semibold mb-2">Pontuação Final:</h3>
              <ul className="list-inside list-disc">
                <li className="text-lg">
                  Capitalista:{" "}
                  <span className="font-bold">{scores.Capitalista || 0}</span>{" "}
                  pontos
                </li>
                <li className="text-lg">
                  Socialista:{" "}
                  <span className="font-bold">{scores.Socialista || 0}</span>{" "}
                  pontos
                </li>
                <li className="text-lg">
                  Comunista:{" "}
                  <span className="font-bold">{scores.Comunista || 0}</span>{" "}
                  pontos
                </li>
                <li className="text-lg">
                  Social Democrata:{" "}
                  <span className="font-bold">{scores.Democrata || 0}</span>{" "}
                  pontos
                </li>
                <li className="text-lg">
                  Libertário:{" "}
                  <span className="font-bold">{scores.Libertário || 0}</span>{" "}
                  pontos
                </li>
              </ul>
            </div>

            <div className="w-full text-left bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">
                Descrição
              </h3>
              <p className="text-gray-300">{resultInfo.description}</p>
            </div>

            <button
              onClick={restartQuiz}
              className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Refazer o Quiz
            </button>
          </div>
        ) : (
          // ETAPA 5: TELA DE PERGUNTAS (com a nova UI)
          <>
            <div>
              <p className="text-gray-400 mb-2">
                Pergunta {currentQuestionIndex + 1} de {questions.length}
              </p>
              <h2 className="text-2xl font-semibold">
                {currentQuestion.question}
              </h2>
            </div>
            <div className="flex flex-col space-y-4 my-8">
              {shuffledAnswers.map((answer, index) => {
                const isSelected =
                  userAnswers[currentQuestionIndex] === answer.ideology;
                return (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerSelect(currentQuestionIndex, answer.ideology)
                    }
                    className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-left ${
                      isSelected
                        ? "bg-cyan-600 text-white ring-2 ring-cyan-300 shadow-lg"
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                    }`}
                  >
                    {answer.text}
                  </button>
                );
              })}
            </div>

            {/* Botões de Navegação */}
            <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-700">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Anterior
              </button>

              {isLastQuestion ? (
                <button
                  onClick={handleFinishQuiz}
                  disabled={!isAnswerSelected}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Finalizar
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!isAnswerSelected}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Próximo
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
