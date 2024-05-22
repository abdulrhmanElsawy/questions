import React, { useState, useEffect ,useRef} from 'react';
import './css/landing.css';

import correctSound  from './sounds/gdaa.mp3';

const questionsData = [
    {
        "lecture": 1,
        "id": 1,
        "question": "What is a signal?",
        "answers": {
            "a": "A constant value over time",
            "b": "A function of one or more variables that conveys information",
            "c": "A random noise in a system"
        },
        "correct": "b",
        "reason": "A signal is a function of one or more variables that conveys information about some (usually physical) phenomenon."
    },
    {
        "lecture": 1,
        "id": 2,
        "question": "What is an independent variable in a signal?",
        "answers": {
            "a": "The value of the function",
            "b": "A constant parameter",
            "c": "A variable such as time in the function"
        },
        "correct": "c",
        "reason": "In the expression f(t), the variable t is the independent variable."
    },
    {
        "lecture": 1,
        "id": 3,
        "question": "Which of the following is an example of a signal?",
        "answers": {
            "a": "Temperature of a room",
            "b": "A stock market index",
            "c": "Both a and b"
        },
        "correct": "c",
        "reason": "Both temperature and stock market index are examples of signals."
    },
    {
        "lecture": 1,
        "id": 4,
        "question": "What type of signal is an audio signal?",
        "answers": {
            "a": "One-dimensional",
            "b": "Multi-dimensional",
            "c": "Discrete"
        },
        "correct": "a",
        "reason": "An audio signal has one independent variable, making it one-dimensional."
    },
    {
        "lecture": 1,
        "id": 5,
        "question": "What is a continuous-time (CT) signal?",
        "answers": {
            "a": "A signal with discrete independent variables",
            "b": "A signal with continuous independent variables",
            "c": "A signal with discrete dependent variables"
        },
        "correct": "b",
        "reason": "A CT signal has continuous independent variables."
    },
    {
        "lecture": 1,
        "id": 6,
        "question": "What is an analog signal?",
        "answers": {
            "a": "A discrete-valued DT signal",
            "b": "A continuous-valued CT signal",
            "c": "A digital audio signal"
        },
        "correct": "b",
        "reason": "An analog signal is a continuous-valued CT signal."
    },
    {
        "lecture": 1,
        "id": 7,
        "question": "How can a system be classified based on the number of inputs?",
        "answers": {
            "a": "Single input (SI) or multiple input (MI)",
            "b": "Single output (SO) or multiple output (MO)",
            "c": "Analog or digital"
        },
        "correct": "a",
        "reason": "A system with one input is single input (SI), and with more than one input is multiple input (MI)."
    },
    {
        "lecture": 1,
        "id": 8,
        "question": "What does a discrete-to-continuous (D/C) converter do?",
        "answers": {
            "a": "Converts analog signals to digital signals",
            "b": "Processes continuous-time signals with a discrete-time system",
            "c": "Converts discrete-time signals to continuous-time signals"
        },
        "correct": "c",
        "reason": "A D/C converter processes discrete-time signals with a continuous-time system."
    },
    {
        "lecture": 1,
        "id": 9,
        "question": "What caused the collapse of the Tacoma Narrows Bridge?",
        "answers": {
            "a": "An earthquake",
            "b": "Wind-induced vibrations and an unstable mechanical system",
            "c": "Excessive traffic load"
        },
        "correct": "b",
        "reason": "The bridge collapsed due to wind-induced vibrations and an unstable mechanical system."
    },
    {
        "lecture": 1,
        "id": 10,
        "question": "What is the notation issue engineers need to be cautious of?",
        "answers": {
            "a": "Confusing function value with function itself",
            "b": "Mislabeling variables",
            "c": "Incorrect unit conversions"
        },
        "correct": "a",
        "reason": "Engineers must distinguish between a function and its value to avoid ambiguity."
    },
    {
        "lecture": 1,
        "id": 11,
        "question": "What is an even signal?",
        "answers": {
            "a": "A signal symmetric about the origin",
            "b": "A signal antisymmetric about the origin",
            "c": "A signal that changes direction periodically"
        },
        "correct": "a",
        "reason": "An even signal is symmetric about the origin."
    },
    {
        "lecture": 1,
        "id": 12,
        "question": "What characterizes an odd signal?",
        "answers": {
            "a": "Symmetric about the origin",
            "b": "Antisymmetric about the origin",
            "c": "Constant value over time"
        },
        "correct": "b",
        "reason": "An odd signal is antisymmetric about the origin."
    },
    {
        "lecture": 1,
        "id": 13,
        "question": "When is a function said to be periodic?",
        "answers": {
            "a": "When it repeats every time unit",
            "b": "When x(t) = x(t+T) for some T",
            "c": "When it never repeats"
        },
        "correct": "b",
        "reason": "A function is periodic if x(t) = x(t+T) for some positive constant T."
    },
    {
        "lecture": 1,
        "id": 14,
        "question": "What is the fundamental period of a periodic signal?",
        "answers": {
            "a": "The shortest interval after which the signal repeats",
            "b": "The largest interval after which the signal repeats",
            "c": "The average interval after which the signal repeats"
        },
        "correct": "a",
        "reason": "The fundamental period is the smallest period with which a signal is periodic."
    },
    {
        "lecture": 1,
        "id": 15,
        "question": "What is a system in signal processing?",
        "answers": {
            "a": "An independent variable",
            "b": "An entity that processes input signals to produce output signals",
            "c": "A dependent variable"
        },
        "correct": "b",
        "reason": "A system is an entity that processes one or more input signals to produce one or more output signals."
    },
    {
        "lecture": 1,
        "id": 16,
        "question": "What is a discrete-time (DT) signal?",
        "answers": {
            "a": "A signal with continuous independent variables",
            "b": "A signal with discrete independent variables",
            "c": "A continuous-valued signal"
        },
        "correct": "b",
        "reason": "A DT signal has discrete independent variables."
    },
    {
        "lecture": 1,
        "id": 17,
        "question": "What does the notation x(t) represent in signal processing?",
        "answers": {
            "a": "A system operator",
            "b": "The value of the function x evaluated at t",
            "c": "The independent variable t"
        },
        "correct": "b",
        "reason": "The notation x(t) means the value of the function x evaluated at the point t."
    },
    {
        "lecture": 1,
        "id": 18,
        "question": "What is an N-periodic sequence?",
        "answers": {
            "a": "A sequence that repeats after N samples",
            "b": "A sequence that never repeats",
            "c": "A continuous signal"
        },
        "correct": "a",
        "reason": "An N-periodic sequence is one that repeats after every N samples."
    },
    {
        "lecture": 1,
        "id": 19,
        "question": "What is the frequency of a T-periodic function?",
        "answers": {
            "a": "1/T",
            "b": "T",
            "c": "2πT"
        },
        "correct": "a",
        "reason": "The frequency of a T-periodic function is 1/T."
    },
    {
        "lecture": 1,
        "id": 20,
        "question": "What is the fundamental frequency of a signal?",
        "answers": {
            "a": "The smallest frequency at which the signal is periodic",
            "b": "The highest frequency at which the signal is periodic",
            "c": "The average frequency at which the signal is periodic"
        },
        "correct": "a",
        "reason": "The fundamental frequency is the smallest frequency at which the signal is periodic."
    },
    {
        "lecture": 1,
        "id": 21,
        "question": "Which signal is symmetric about the origin?",
        "answers": {
            "a": "Odd signal",
            "b": "Even signal",
            "c": "Periodic signal"
        },
        "correct": "b",
        "reason": "An even signal is symmetric about the origin."
    },
    {
        "lecture": 1,
        "id": 22,
        "question": "What is the purpose of a feedback control system?",
        "answers": {
            "a": "To process digital signals",
            "b": "To ensure the output meets the desired input",
            "c": "To convert analog signals to digital signals"
        },
        "correct": "b",
        "reason": "A feedback control system ensures the output signal meets the desired input by using feedback."
    },
    {
        "lecture": 1,
        "id": 23,
        "question": "What was the primary cause of the Tacoma Narrows Bridge collapse?",
        "answers": {
            "a": "Earthquake",
            "b": "Wind-induced vibrations",
            "c": "Excessive traffic load"
        },
        "correct": "b",
        "reason": "The Tacoma Narrows Bridge collapsed due to wind-induced vibrations and an unstable mechanical system."
    },
    {
        "lecture": 1,
        "id": 24,
        "question": "What is a digital signal?",
        "answers": {
            "a": "A continuous-valued CT signal",
            "b": "A discrete-valued DT signal",
            "c": "An analog signal"
        },
        "correct": "b",
        "reason": "A digital signal is a discrete-valued DT signal."
    },
    {
        "lecture": 1,
        "id": 25,
        "question": "What is the term used for the value of the function f evaluated at the point t?",
        "answers": {
            "a": "Independent variable",
            "b": "Function value",
            "c": "Dependent variable"
        },
        "correct": "b",
        "reason": "The term 'function value' refers to the value of the function f evaluated at the point t."
    },
    {
        "lecture": 1,
        "id": 26,
        "question": "How do you denote the nth element of a sequence x?",
        "answers": {
            "a": "x(t)",
            "b": "x[n]",
            "c": "x(n) or x_n"
        },
        "correct": "c",
        "reason": "The nth element of a sequence x is denoted as either x(n) or x_n."
    },
    {
        "lecture": 1,
        "id": 27,
        "question": "What is an aperiodic signal?",
        "answers": {
            "a": "A signal that repeats periodically",
            "b": "A signal that does not repeat",
            "c": "A signal that is symmetric about the origin"
        },
        "correct": "b",
        "reason": "An aperiodic signal is one that does not repeat."
    },
    {
        "lecture": 1,
        "id": 28,
        "question": "What characterizes an odd signal?",
        "answers": {
            "a": "It is symmetric about the origin",
            "b": "It is antisymmetric about the origin",
            "c": "It is constant over time"
        },
        "correct": "b",
        "reason": "An odd signal is antisymmetric about the origin."
    },
    {
        "lecture": 1,
        "id": 29,
        "question": "Which term describes a signal with a continuous independent variable and a continuous dependent variable?",
        "answers": {
            "a": "Analog signal",
            "b": "Digital signal",
            "c": "Discrete-time signal"
        },
        "correct": "a",
        "reason": "An analog signal has a continuous independent variable and a continuous dependent variable."
    },
    {
        "lecture": 1,
        "id": 30,
        "question": "What does 'H' denote in the expression Hx(t)?",
        "answers": {
            "a": "An independent variable",
            "b": "A system operator",
            "c": "A function value"
        },
        "correct": "b",
        "reason": "In this context, H denotes a system operator which maps a function to a function."
    },
    {
        "lecture": 1,
        "id": 31,
        "question": "What does 'x(n)' represent in a sequence?",
        "answers": {
            "a": "The independent variable",
            "b": "The nth element of the sequence",
            "c": "The sum of all elements in the sequence"
        },
        "correct": "b",
        "reason": "In a sequence, x(n) represents the nth element of the sequence."
    },
    {
        "lecture": 1,
        "id": 32,
        "question": "What is a sequence?",
        "answers": {
            "a": "A special case of a function where the domain is the integers",
            "b": "A continuous-time signal",
            "c": "A function with multiple independent variables"
        },
        "correct": "a",
        "reason": "A sequence is a special case of a function where the domain is the integers."
    },
    {
        "lecture": 1,
        "id": 33,
        "question": "In the context of signal processing, what does CT stand for?",
        "answers": {
            "a": "Continuous-Time",
            "b": "Control Theory",
            "c": "Central Time"
        },
        "correct": "a",
        "reason": "In signal processing, CT stands for Continuous-Time."
    },
    {
        "lecture": 1,
        "id": 34,
        "question": "In the context of signal processing, what does DT stand for?",
        "answers": {
            "a": "Digital Time",
            "b": "Discrete-Time",
            "c": "Delayed Time"
        },
        "correct": "b",
        "reason": "In signal processing, DT stands for Discrete-Time."
    },
    {
        "lecture": 1,
        "id": 35,
        "question": "What describes the process of converting a continuous-time signal to a discrete-time signal?",
        "answers": {
            "a": "Analog-to-Digital Conversion",
            "b": "Digital-to-Analog Conversion",
            "c": "Discrete-to-Continuous Conversion"
        },
        "correct": "a",
        "reason": "The process of converting a continuous-time signal to a discrete-time signal is known as Analog-to-Digital Conversion."
    },
    {
        "lecture": 1,
        "id": 36,
        "question": "What type of signal is described as having discrete independent and dependent variables?",
        "answers": {
            "a": "Analog signal",
            "b": "Digital signal",
            "c": "Continuous-time signal"
        },
        "correct": "b",
        "reason": "A digital signal has discrete independent and dependent variables."
    },
    {
        "lecture": 1,
        "id": 37,
        "question": "What does the expression f(t) + g(t) represent?",
        "answers": {
            "a": "A single function value",
            "b": "The sum of the functions f and g",
            "c": "The independent variable"
        },
        "correct": "a",
        "reason": "The expression f(t) + g(t) represents the sum of the values of the functions f and g at the point t."
    },
    {
        "lecture": 1,
        "id": 38,
        "question": "Which of the following is true for a sequence x(n) if it is even?",
        "answers": {
            "a": "x(n) = -x(-n) for all n",
            "b": "x(n) = x(-n) for all n",
            "c": "x(n) = x(n+N) for all n"
        },
        "correct": "b",
        "reason": "A sequence x is said to be even if it satisfies x(n) = x(-n) for all n."
    },
    {
        "lecture": 1,
        "id": 39,
        "question": "Which condition must an odd signal x(n) satisfy?",
        "answers": {
            "a": "x(n) = x(-n) for all n",
            "b": "x(n) = -x(-n) for all n",
            "c": "x(n) = x(n+N) for all n"
        },
        "correct": "b",
        "reason": "An odd signal x is said to satisfy x(n) = -x(-n) for all n."
    },
    {
        "lecture": 1,
        "id": 40,
        "question": "What does it mean for a function x(t) to be T-periodic?",
        "answers": {
            "a": "x(t) is equal to zero for all t",
            "b": "x(t) = x(t+T) for all t",
            "c": "x(t) = x(t+T) for some t"
        },
        "correct": "b",
        "reason": "A function x is said to be T-periodic if x(t) = x(t+T) for all t."
    },
    {
        "lecture": 1,
        "id": 41,
        "question": "What is the smallest period with which a signal is periodic called?",
        "answers": {
            "a": "Standard period",
            "b": "Primary period",
            "c": "Fundamental period"
        },
        "correct": "c",
        "reason": "The smallest period with which a signal is periodic is called the fundamental period."
    },
    {
        "lecture": 1,
        "id": 42,
        "question": "What is the term for the frequency corresponding to the fundamental period of a signal?",
        "answers": {
            "a": "Base frequency",
            "b": "Primary frequency",
            "c": "Fundamental frequency"
        },
        "correct": "c",
        "reason": "The frequency corresponding to the fundamental period of a signal is called the fundamental frequency."
    },
    {
        "lecture": 1,
        "id": 43,
        "question": "What defines a multi-dimensional signal?",
        "answers": {
            "a": "A signal with one independent variable",
            "b": "A signal with more than one independent variable",
            "c": "A signal with a continuous dependent variable"
        },
        "correct": "b",
        "reason": "A signal with more than one independent variable is said to be multi-dimensional."
    },
    {
        "lecture": 1,
        "id": 44,
        "question": "In the context of feedback control systems, what does the feedback signal do?",
        "answers": {
            "a": "Creates the reference input",
            "b": "Ensures the output signal matches the desired input",
            "c": "Measures the system's delay"
        },
        "correct": "b",
        "reason": "The feedback signal in a feedback control system ensures that the output matches the desired input."
    },
    {
        "lecture": 1,
        "id": 45,
        "question": "Which example below is a continuous-time system?",
        "answers": {
            "a": "An audio recording system",
            "b": "A digital image processing system",
            "c": "An analog radio transmitter"
        },
        "correct": "c",
        "reason": "An analog radio transmitter is a continuous-time system."
    },
    {
        "lecture": 1,
        "id": 46,
        "question": "What is the primary role of signal processing systems?",
        "answers": {
            "a": "To generate random signals",
            "b": "To process and manipulate signals",
            "c": "To store data without modification"
        },
        "correct": "b",
        "reason": "Signal processing systems are designed to process and manipulate signals."
    },
    {
        "lecture": 1,
        "id": 47,
        "question": "What kind of system processes discrete-time signals?",
        "answers": {
            "a": "Analog system",
            "b": "Continuous-time system",
            "c": "Discrete-time system"
        },
        "correct": "c",
        "reason": "A discrete-time system processes discrete-time signals."
    },
    {
        "lecture": 1,
        "id": 48,
        "question": "Which term is used to describe a continuous-valued CT signal?",
        "answers": {
            "a": "Digital",
            "b": "Analog",
            "c": "Discrete"
        },
        "correct": "b",
        "reason": "A continuous-valued CT signal is described as analog."
    },
    {
        "lecture": 1,
        "id": 49,
        "question": "What is the role of a continuous-to-discrete (C/D) converter?",
        "answers": {
            "a": "To process analog signals as digital signals",
            "b": "To process digital signals as analog signals",
            "c": "To process continuous-time signals with continuous-time systems"
        },
        "correct": "a",
        "reason": "A C/D converter processes analog signals as digital signals."
    },
    {
        "lecture": 1,
        "id": 50,
        "question": "What does the expression x(n) = x(n+N) signify in signal processing?",
        "answers": {
            "a": "The signal is continuous-time",
            "b": "The signal is periodic with period N",
            "c": "The signal is even"
        },
        "correct": "b",
        "reason": "The expression x(n) = x(n+N) indicates that the signal is periodic with period N."
    },
    {
        "lecture": 1,
        "id": 51,
        "question": "What does a feedback signal in a control system provide?",
        "answers": {
            "a": "Random noise to the input",
            "b": "Information about the output to adjust the input",
            "c": "A constant reference value"
        },
        "correct": "b",
        "reason": "A feedback signal provides information about the output to adjust the input."
    },
    {
        "lecture": 1,
        "id": 52,
        "question": "Which of the following is true for a CT signal that is also an analog signal?",
        "answers": {
            "a": "It has discrete independent variables",
            "b": "It has continuous dependent variables",
            "c": "It processes digital signals"
        },
        "correct": "b",
        "reason": "An analog CT signal has continuous dependent variables."
    },
    {
        "lecture": 1,
        "id": 53,
        "question": "What is the meaning of x(t) = -x(t) for all t?",
        "answers": {
            "a": "The signal is even",
            "b": "The signal is odd",
            "c": "The signal is periodic"
        },
        "correct": "b",
        "reason": "The condition x(t) = -x(t) for all t indicates that the signal is odd."
    },
    {
        "lecture": 1,
        "id": 54,
        "question": "What type of signal is a digital image?",
        "answers": {
            "a": "Continuous-time signal",
            "b": "Discrete-valued signal",
            "c": "Analog signal"
        },
        "correct": "b",
        "reason": "A digital image is a discrete-valued signal."
    },
    {
        "lecture": 1,
        "id": 55,
        "question": "What kind of signals does a digital system process?",
        "answers": {
            "a": "Continuous-time signals",
            "b": "Discrete-valued DT signals",
            "c": "Analog signals"
        },
        "correct": "b",
        "reason": "A digital system processes discrete-valued DT signals."
    },
    {
        "lecture": 2,
        "id": 56,
        "question": "What does time shifting (translation) do to a signal?",
        "answers": {
            "a": "Shifts the signal along the time axis",
            "b": "Reverses the signal",
            "c": "Changes the amplitude of the signal"
        },
        "correct": "a",
        "reason": "Time shifting moves the signal left or right along the time axis."
    },
    {
        "lecture": 2,
        "id": 57,
        "question": "What happens when a signal is time-shifted with a positive value of b?",
        "answers": {
            "a": "The signal shifts to the left",
            "b": "The signal shifts to the right",
            "c": "The signal remains unchanged"
        },
        "correct": "b",
        "reason": "If b > 0, the signal shifts to the right, which is a delay."
    },
    {
        "lecture": 2,
        "id": 58,
        "question": "What is the effect of time reversal on a signal?",
        "answers": {
            "a": "It shifts the signal",
            "b": "It reflects the signal about t=0",
            "c": "It compresses the signal"
        },
        "correct": "b",
        "reason": "Time reversal reflects the signal about the vertical axis t=0."
    },
    {
        "lecture": 2,
        "id": 59,
        "question": "What does time compression/expansion (dilation) do to a signal?",
        "answers": {
            "a": "Shifts the signal along the time axis",
            "b": "Reflects the signal about t=0",
            "c": "Compresses or expands the signal along the time axis"
        },
        "correct": "c",
        "reason": "Time compression/expansion changes the signal's width along the time axis."
    },
    {
        "lecture": 2,
        "id": 60,
        "question": "What is the result of time scaling with |a| > 1?",
        "answers": {
            "a": "The signal is compressed",
            "b": "The signal is expanded",
            "c": "The signal is reflected"
        },
        "correct": "a",
        "reason": "If |a| > 1, the signal is compressed along the time axis."
    },
    {
        "lecture": 2,
        "id": 61,
        "question": "What happens to a signal when it is time-scaled with a < 0?",
        "answers": {
            "a": "It is expanded",
            "b": "It is compressed",
            "c": "It is time-reversed"
        },
        "correct": "c",
        "reason": "If a < 0, the signal is also time-reversed."
    },
    {
        "lecture": 2,
        "id": 62,
        "question": "What does amplitude scaling do to a signal?",
        "answers": {
            "a": "Shifts the signal along the time axis",
            "b": "Changes the signal's amplitude",
            "c": "Reflects the signal about t=0"
        },
        "correct": "b",
        "reason": "Amplitude scaling changes the signal's amplitude."
    },
    {
        "lecture": 2,
        "id": 63,
        "question": "What is the effect of amplitude shifting on a signal?",
        "answers": {
            "a": "Changes the signal's amplitude",
            "b": "Adds a vertical displacement to the signal",
            "c": "Reflects the signal about t=0"
        },
        "correct": "b",
        "reason": "Amplitude shifting adds a vertical displacement to the signal."
    },
    {
        "lecture": 2,
        "id": 64,
        "question": "What is the sum of two even functions?",
        "answers": {
            "a": "Odd",
            "b": "Even",
            "c": "Neither even nor odd"
        },
        "correct": "b",
        "reason": "The sum of two even functions is even."
    },
    {
        "lecture": 2,
        "id": 65,
        "question": "What is the sum of an even function and an odd function?",
        "answers": {
            "a": "Even",
            "b": "Odd",
            "c": "Neither even nor odd"
        },
        "correct": "c",
        "reason": "The sum of an even function and an odd function is neither even nor odd."
    },
    {
        "lecture": 2,
        "id": 66,
        "question": "What is the product of two odd functions?",
        "answers": {
            "a": "Even",
            "b": "Odd",
            "c": "Neither even nor odd"
        },
        "correct": "a",
        "reason": "The product of two odd functions is even."
    },
    {
        "lecture": 2,
        "id": 67,
        "question": "How can a signal be decomposed into even and odd parts?",
        "answers": {
            "a": "By adding the signal to itself",
            "b": "By subtracting the signal from itself",
            "c": "By adding and subtracting the signal with its time-reversed version"
        },
        "correct": "c",
        "reason": "A signal can be decomposed by adding and subtracting it with its time-reversed version."
    },
    {
        "lecture": 2,
        "id": 68,
        "question": "What is a right-sided signal?",
        "answers": {
            "a": "A signal that is nonzero for t < t0",
            "b": "A signal that is nonzero for t >= t0",
            "c": "A signal that is zero for all t"
        },
        "correct": "b",
        "reason": "A right-sided signal is nonzero for t >= t0."
    },
    {
        "lecture": 2,
        "id": 69,
        "question": "What is a causal signal?",
        "answers": {
            "a": "A signal that is zero for t < 0",
            "b": "A signal that is zero for t > 0",
            "c": "A signal that is nonzero for all t"
        },
        "correct": "a",
        "reason": "A causal signal is zero for t < 0."
    },
    {
        "lecture": 2,
        "id": 70,
        "question": "What is an anticausal signal?",
        "answers": {
            "a": "A signal that is zero for t < 0",
            "b": "A signal that is zero for t > 0",
            "c": "A signal that is nonzero for all t"
        },
        "correct": "b",
        "reason": "An anticausal signal is zero for t > 0."
    },
    {
        "lecture": 2,
        "id": 71,
        "question": "What is a finite-duration signal?",
        "answers": {
            "a": "A signal that is zero for all t",
            "b": "A signal that is nonzero for a finite time interval",
            "c": "A signal that is nonzero for all t"
        },
        "correct": "b",
        "reason": "A finite-duration signal is nonzero for a finite time interval."
    },
    {
        "lecture": 2,
        "id": 72,
        "question": "What is a bounded signal?",
        "answers": {
            "a": "A signal that is finite for all t",
            "b": "A signal that is infinite for all t",
            "c": "A signal that is nonzero for all t"
        },
        "correct": "a",
        "reason": "A bounded signal is finite for all t."
    },
    {
        "lecture": 2,
        "id": 73,
        "question": "How is the energy of a signal defined?",
        "answers": {
            "a": "E = ∫|x(t)| dt",
            "b": "E = ∫|x(t)|^2 dt",
            "c": "E = ∫x(t) dt"
        },
        "correct": "b",
        "reason": "The energy of a signal is defined as E = ∫|x(t)|^2 dt."
    },
    {
        "lecture": 2,
        "id": 74,
        "question": "What is the average power of a signal?",
        "answers": {
            "a": "P = lim(T→∞) (1/T) ∫|x(t)| dt",
            "b": "P = lim(T→∞) (1/2T) ∫|x(t)|^2 dt",
            "c": "P = lim(T→∞) (1/T) ∫x(t) dt"
        },
        "correct": "b",
        "reason": "The average power of a signal is P = lim(T→∞) (1/2T) ∫|x(t)|^2 dt."
    },
    {
        "lecture": 2,
        "id": 75,
        "question": "What is the period of a real sinusoid x(t) = A cos(ωt + φ)?",
        "answers": {
            "a": "T = 2π/ω",
            "b": "T = 2π|ω|",
            "c": "T = 2|π/ω|"
        },
        "correct": "a",
        "reason": "The period of a real sinusoid is T = 2π/ω."
    },
    {
        "lecture": 2,
        "id": 76,
        "question": "What does the unit-step function u(t) equal for t < 0?",
        "answers": {
            "a": "1",
            "b": "0",
            "c": "-1"
        },
        "correct": "b",
        "reason": "The unit-step function u(t) equals 0 for t < 0."
    },
    {
        "lecture": 2,
        "id": 77,
        "question": "What is the value of the signum function sgn(t) for t > 0?",
        "answers": {
            "a": "1",
            "b": "0",
            "c": "-1"
        },
        "correct": "a",
        "reason": "The signum function sgn(t) equals 1 for t > 0."
    },
    {
        "lecture": 2,
        "id": 78,
        "question": "What is the rectangular function rect(t) equal to for |t| > 1/2?",
        "answers": {
            "a": "1",
            "b": "0",
            "c": "-1"
        },
        "correct": "b",
        "reason": "The rectangular function rect(t) equals 0 for |t| > 1/2."
    },
    {
        "lecture": 2,
        "id": 79,
        "question": "What is the value of the triangular function tri(t) for |t| > 1?",
        "answers": {
            "a": "1",
            "b": "0",
            "c": "-1"
        },
        "correct": "b",
        "reason": "The triangular function tri(t) equals 0 for |t| > 1."
    },
    {
        "lecture": 2,
        "id": 80,
        "question": "What are the properties of the unit-impulse function δ(t)?",
        "answers": {
            "a": "δ(t) = 1 for t ≠ 0",
            "b": "δ(t) = 0 for t ≠ 0 and ∫δ(t) dt = 1",
            "c": "δ(t) = 0 for all t"
        },
        "correct": "b",
        "reason": "The unit-impulse function δ(t) is zero for t ≠ 0 and integrates to 1."
    },
    {
        "lecture": 2,
        "id": 81,
        "question": "What defines a system with memory?",
        "answers": {
            "a": "The system's output depends only on current input values",
            "b": "The system's output depends on past or future input values",
            "c": "The system's output is independent of input values"
        },
        "correct": "b",
        "reason": "A system with memory depends on past or future input values."
    },
    {
        "lecture": 2,
        "id": 82,
        "question": "What characterizes a causal system?",
        "answers": {
            "a": "Its output depends on future input values",
            "b": "Its output depends only on current and past input values",
            "c": "Its output is independent of input values"
        },
        "correct": "b",
        "reason": "A causal system depends only on current and past input values."
    },
    {
        "lecture": 2,
        "id": 83,
        "question": "What makes a system invertible?",
        "answers": {
            "a": "There exists a system that can reproduce the input from the output",
            "b": "The output does not change with input",
            "c": "The system has memory"
        },
        "correct": "a",
        "reason": "An invertible system has an inverse system that can reproduce the input from the output."
    },
    {
        "lecture": 2,
        "id": 84,
        "question": "What is a BIBO stable system?",
        "answers": {
            "a": "Every bounded input leads to an unbounded output",
            "b": "Every bounded input leads to a bounded output",
            "c": "The system's output is independent of the input"
        },
        "correct": "b",
        "reason": "A BIBO stable system ensures that every bounded input leads to a bounded output."
    },
    {
        "lecture": 2,
        "id": 85,
        "question": "What defines a time-invariant system?",
        "answers": {
            "a": "A time shift in the input results in a different output",
            "b": "A time shift in the input results in the same time shift in the output",
            "c": "The output depends on future input values"
        },
        "correct": "b",
        "reason": "A time-invariant system produces the same time shift in the output as in the input."
    },
    {
        "lecture": 2,
        "id": 86,
        "question": "What is a linear system?",
        "answers": {
            "a": "A system that satisfies additivity and homogeneity",
            "b": "A system that has memory",
            "c": "A system that is time-invariant"
        },
        "correct": "a",
        "reason": "A linear system satisfies both additivity and homogeneity."
    },
    {
        "lecture": 2,
        "id": 87,
        "question": "What is the formula for the even part of a signal x(t)?",
        "answers": {
            "a": "Xe(t) = 1/2 [x(t) - x(-t)]",
            "b": "Xe(t) = 1/2 [x(t) + x(-t)]",
            "c": "Xe(t) = x(t)"
        },
        "correct": "b",
        "reason": "The even part of a signal is given by Xe(t) = 1/2 [x(t) + x(-t)]."
    },
    {
        "lecture": 2,
        "id": 88,
        "question": "What is the formula for the odd part of a signal x(t)?",
        "answers": {
            "a": "Xo(t) = 1/2 [x(t) - x(-t)]",
            "b": "Xo(t) = 1/2 [x(t) + x(-t)]",
            "c": "Xo(t) = x(t)"
        },
        "correct": "a",
        "reason": "The odd part of a signal is given by Xo(t) = 1/2 [x(t) - x(-t)]."
    },
    {
        "lecture": 2,
        "id": 89,
        "question": "What is the value of the rectangular function rect(t) for |t| ≤ 1/2?",
        "answers": {
            "a": "1",
            "b": "0",
            "c": "-1"
        },
        "correct": "a",
        "reason": "The rectangular function rect(t) equals 1 for |t| ≤ 1/2."
    },
    {
        "lecture": 2,
        "id": 90,
        "question": "What is the value of the triangular function tri(t) for |t| > 1?",
        "answers": {
            "a": "1",
            "b": "0",
            "c": "-1"
        },
        "correct": "b",
        "reason": "The triangular function tri(t) equals 0 for |t| > 1."
    },
    {
        "lecture": 2,
        "id": 91,
        "question": "What are the properties of the unit-impulse function δ(t)?",
        "answers": {
            "a": "δ(t) = 1 for t ≠ 0",
            "b": "δ(t) = 0 for t ≠ 0 and ∫δ(t) dt = 1",
            "c": "δ(t) = 0 for all t"
        },
        "correct": "b",
        "reason": "The unit-impulse function δ(t) is zero for t ≠ 0 and integrates to 1."
    },
    {
        "lecture": 2,
        "id": 92,
        "question": "What is the unit-step function u(t) equal to for t < 0?",
        "answers": {
            "a": "1",
            "b": "0",
            "c": "-1"
        },
        "correct": "b",
        "reason": "The unit-step function u(t) equals 0 for t < 0."
    },
    {
        "lecture": 2,
        "id": 93,
        "question": "What is the value of the signum function sgn(t) for t > 0?",
        "answers": {
            "a": "1",
            "b": "0",
            "c": "-1"
        },
        "correct": "a",
        "reason": "The signum function sgn(t) equals 1 for t > 0."
    },
    {
        "lecture": 2,
        "id": 94,
        "question": "What defines a right-sided signal?",
        "answers": {
            "a": "A signal that is zero for all t",
            "b": "A signal that is nonzero for t >= t0",
            "c": "A signal that is nonzero for all t"
        },
        "correct": "b",
        "reason": "A right-sided signal is nonzero for t >= t0."
    },
    {
        "lecture": 2,
        "id": 95,
        "question": "What defines a left-sided signal?",
        "answers": {
            "a": "A signal that is zero for all t",
            "b": "A signal that is nonzero for t <= t0",
            "c": "A signal that is nonzero for all t"
        },
        "correct": "b",
        "reason": "A left-sided signal is nonzero for t <= t0."
    },
    {
        "lecture": 2,
        "id": 96,
        "question": "What defines a bounded signal?",
        "answers": {
            "a": "A signal that is finite for all t",
            "b": "A signal that is infinite for all t",
            "c": "A signal that is nonzero for all t"
        },
        "correct": "a",
        "reason": "A bounded signal is finite for all t."
    },
    {
        "lecture": 2,
        "id": 97,
        "question": "How is the energy of a signal defined?",
        "answers": {
            "a": "E = ∫|x(t)| dt",
            "b": "E = ∫|x(t)|^2 dt",
            "c": "E = ∫x(t) dt"
        },
        "correct": "b",
        "reason": "The energy of a signal is defined as E = ∫|x(t)|^2 dt."
    },
    {
        "lecture": 2,
        "id": 98,
        "question": "What is the average power of a signal?",
        "answers": {
            "a": "P = lim(T→∞) (1/T) ∫|x(t)| dt",
            "b": "P = lim(T→∞) (1/2T) ∫|x(t)|^2 dt",
            "c": "P = lim(T→∞) (1/T) ∫x(t) dt"
        },
        "correct": "b",
        "reason": "The average power of a signal is P = lim(T→∞) (1/2T) ∫|x(t)|^2 dt."
    },
    {
        "lecture": 2,
        "id": 99,
        "question": "What is the period of a real sinusoid x(t) = A cos(ωt + φ)?",
        "answers": {
            "a": "T = 2π/ω",
            "b": "T = 2π|ω|",
            "c": "T = 2|π/ω|"
        },
        "correct": "a",
        "reason": "The period of a real sinusoid is T = 2π/ω."
    },
    {
        "lecture": 2,
        "id": 100,
        "question": "What is a CT real sinusoid?",
        "answers": {
            "a": "A function of the form x(t) = A sin(ωt + φ)",
            "b": "A function of the form x(t) = A cos(ωt + φ)",
            "c": "A function of the form x(t) = A e^(jt)"
        },
        "correct": "b",
        "reason": "A CT real sinusoid is a function of the form x(t) = A cos(ωt + φ)."
    },
    {
        "lecture": 2,
        "id": 101,
        "question": "What defines a real exponential function?",
        "answers": {
            "a": "A function of the form x(t) = A e^(αt) where A and α are real numbers",
            "b": "A function of the form x(t) = A e^(jt) where A is a real number",
            "c": "A function of the form x(t) = A cos(ωt + φ)"
        },
        "correct": "a",
        "reason": "A real exponential function is of the form x(t) = A e^(αt) where A and α are real numbers."
    },
    {
        "lecture": 2,
        "id": 102,
        "question": "What is the cardinal sine function denoted as?",
        "answers": {
            "a": "rect(t)",
            "b": "tri(t)",
            "c": "sinc(t)"
        },
        "correct": "c",
        "reason": "The cardinal sine function is denoted as sinc(t)."
    },
    {
        "lecture": 2,
        "id": 103,
        "question": "What is the value of the unit-step function u(t) at t=0?",
        "answers": {
            "a": "0",
            "b": "1",
            "c": "It is undefined"
        },
        "correct": "c",
        "reason": "The value of the unit-step function u(t) at t=0 is undefined and can be taken as 0 or 1 depending on the context."
    },
    {
        "lecture": 2,
        "id": 104,
        "question": "What does the term 'causal system' refer to?",
        "answers": {
            "a": "A system whose output depends on future values of the input",
            "b": "A system whose output depends only on current and past input values",
            "c": "A system whose output is independent of the input"
        },
        "correct": "b",
        "reason": "A causal system's output depends only on current and past input values."
    },
    {
        "lecture": 2,
        "id": 105,
        "question": "What is the fundamental period of a complex exponential signal x(t) = Ae^(jωt)?",
        "answers": {
            "a": "T = 2π/|ω|",
            "b": "T = 2π",
            "c": "T = 2|ω|/π"
        },
        "correct": "a",
        "reason": "The fundamental period of a complex exponential signal x(t) = Ae^(jωt) is T = 2π/|ω|."
    },
    {
        "lecture": 2,
        "id": 106,
        "question": "How is a signal's average power defined?",
        "answers": {
            "a": "P = ∫|x(t)| dt",
            "b": "P = lim(T→∞) (1/2T) ∫|x(t)|^2 dt",
            "c": "P = lim(T→∞) (1/T) ∫x(t) dt"
        },
        "correct": "b",
        "reason": "The average power of a signal is defined as P = lim(T→∞) (1/2T) ∫|x(t)|^2 dt."
    },
    {
        "lecture": 2,
        "id": 107,
        "question": "What type of system is characterized by the equation y(t) = ax(t) + b?",
        "answers": {
            "a": "A linear system",
            "b": "A nonlinear system",
            "c": "A time-invariant system"
        },
        "correct": "b",
        "reason": "The system y(t) = ax(t) + b is nonlinear due to the constant term b."
    },
    {
        "lecture": 2,
        "id": 108,
        "question": "What happens to a signal when it is amplitude scaled by a negative value?",
        "answers": {
            "a": "Its amplitude is reduced",
            "b": "It is reflected about the horizontal axis",
            "c": "It is shifted along the time axis"
        },
        "correct": "b",
        "reason": "Amplitude scaling by a negative value reflects the signal about the horizontal axis."
    },
    {
        "lecture": 2,
        "id": 109,
        "question": "What defines a memoryless system?",
        "answers": {
            "a": "Its output depends only on the current input value",
            "b": "Its output depends on past and future input values",
            "c": "Its output is independent of the input"
        },
        "correct": "a",
        "reason": "A memoryless system's output depends only on the current input value."
    },
    {
        "lecture": 2,
        "id": 110,
        "question": "What is the output of a system characterized by y(t) = x(t - 2) + x(t + 2)?",
        "answers": {
            "a": "Time shifted and scaled",
            "b": "Time reversed",
            "c": "A sum of time-shifted signals"
        },
        "correct": "c",
        "reason": "The output y(t) = x(t - 2) + x(t + 2) is a sum of time-shifted signals."
    },
    {
        "lecture": 2,
        "id": 111,
        "question": "What is the sifting property of the unit-impulse function?",
        "answers": {
            "a": "δ(t) = δ(-t)",
            "b": "∫ x(t) δ(t - t0) dt = x(t0)",
            "c": "δ(t) = 0 for t ≠ 0"
        },
        "correct": "b",
        "reason": "The sifting property of the unit-impulse function is ∫ x(t) δ(t - t0) dt = x(t0)."
    },
    {
        "lecture": 2,
        "id": 112,
        "question": "What is a two-sided signal?",
        "answers": {
            "a": "A signal that is finite for all t",
            "b": "A signal that is nonzero for both positive and negative time intervals",
            "c": "A signal that is zero for all t"
        },
        "correct": "b",
        "reason": "A two-sided signal is nonzero for both positive and negative time intervals."
    },
    {
        "lecture": 2,
        "id": 113,
        "question": "What is the significance of bounded-input bounded-output (BIBO) stability?",
        "answers": {
            "a": "Ensures the output is zero for all inputs",
            "b": "Ensures that a bounded input leads to a bounded output",
            "c": "Ensures the output is independent of the input"
        },
        "correct": "b",
        "reason": "BIBO stability ensures that a bounded input leads to a bounded output."
    },
    {
        "lecture": 2,
        "id": 114,
        "question": "What is the effect of the transformation y(t) = x(at - b) with a > 1 and b > 0?",
        "answers": {
            "a": "The signal is compressed and shifted to the right",
            "b": "The signal is expanded and shifted to the left",
            "c": "The signal is reflected and shifted"
        },
        "correct": "a",
        "reason": "The transformation y(t) = x(at - b) with a > 1 compresses the signal and shifts it to the right."
    },
    {
        "lecture": 2,
        "id": 115,
        "question": "How can a rectangular pulse be represented using unit-step functions?",
        "answers": {
            "a": "rect(t) = u(t + 1) - u(t - 1)",
            "b": "rect(t) = u(t) + u(-t)",
            "c": "rect(t) = u(t) - u(t - 1)"
        },
        "correct": "a",
        "reason": "A rectangular pulse can be represented as rect(t) = u(t + 1) - u(t - 1)."
    },
    {
        "lecture": 2,
        "id": 116,
        "question": "What is the property of additivity in linear systems?",
        "answers": {
            "a": "H(ax) = aH(x)",
            "b": "H(x1 + x2) = H(x1) + H(x2)",
            "c": "H(x) = H(-x)"
        },
        "correct": "b",
        "reason": "Additivity in linear systems means H(x1 + x2) = H(x1) + H(x2)."
    },
    {
        "lecture": 2,
        "id": 117,
        "question": "What does time scaling with a factor of |a| < 1 do to a signal?",
        "answers": {
            "a": "Compresses the signal",
            "b": "Expands the signal",
            "c": "Reflects the signal"
        },
        "correct": "b",
        "reason": "Time scaling with |a| < 1 expands the signal."
    },
    {
        "lecture": 2,
        "id": 118,
        "question": "What is a special case of time scaling with a = -1?",
        "answers": {
            "a": "Time shifting",
            "b": "Time reversal",
            "c": "Amplitude scaling"
        },
        "correct": "b",
        "reason": "Time scaling with a = -1 is a special case of time reversal."
    },
    {
        "lecture": 2,
        "id": 119,
        "question": "What is the definition of a real sinusoid?",
        "answers": {
            "a": "A function of the form x(t) = A sin(ωt + φ)",
            "b": "A function of the form x(t) = A cos(ωt + φ)",
            "c": "A function of the form x(t) = Ae^(jt)"
        },
        "correct": "b",
        "reason": "A real sinusoid is a function of the form x(t) = A cos(ωt + φ)."
    },
    {
        "lecture": 2,
        "id": 120,
        "question": "What type of signal is described by x(t) = A cos(ωt + φ) + B sin(ωt + φ)?",
        "answers": {
            "a": "Complex exponential",
            "b": "Real sinusoid",
            "c": "Complex sinusoid"
        },
        "correct": "b",
        "reason": "The signal x(t) = A cos(ωt + φ) + B sin(ωt + φ) describes a real sinusoid."
    },
    {
        "lecture": 2,
        "id": 121,
        "question": "What is Euler's relation used for in signal processing?",
        "answers": {
            "a": "To convert between exponential and trigonometric forms",
            "b": "To define unit-step functions",
            "c": "To calculate signal energy"
        },
        "correct": "a",
        "reason": "Euler's relation is used to convert between exponential and trigonometric forms in signal processing."
    },
    {
        "lecture": 2,
        "id": 122,
        "question": "What is the output of a system with the input signal x(t) = A cos(ωt + φ) and a time scaling factor of 2?",
        "answers": {
            "a": "A cos(2ωt + φ)",
            "b": "A cos(ωt + 2φ)",
            "c": "A cos(ωt + φ/2)"
        },
        "correct": "a",
        "reason": "With a time scaling factor of 2, the output is A cos(2ωt + φ)."
    },
    {
        "lecture": 3,
        "id": 123,
        "question": "Why are Linear Time-Invariant (LTI) systems important in engineering?",
        "answers": {
            "a": "They are difficult to analyze.",
            "b": "They are well-studied and have powerful mathematical tools for analysis.",
            "c": "They cannot be approximated by non-LTI systems."
        },
        "correct": "b",
        "reason": "LTI systems are well-studied and have powerful mathematical tools for analysis."
    },
    {
        "lecture": 3,
        "id": 124,
        "question": "What does the convolution of two functions x and h represent?",
        "answers": {
            "a": "The product of the two functions.",
            "b": "The weighted average of x, with weights given by time-reversed and shifted h.",
            "c": "The sum of the two functions."
        },
        "correct": "b",
        "reason": "The convolution is the weighted average of x, with weights given by time-reversed and shifted h."
    },
    {
        "lecture": 3,
        "id": 125,
        "question": "Which symbol is commonly used to denote convolution?",
        "answers": {
            "a": "*",
            "b": "x",
            "c": "&"
        },
        "correct": "b",
        "reason": "The symbol 'x' is used to denote convolution, not multiplication."
    },
    {
        "lecture": 3,
        "id": 126,
        "question": "What is the significance of convolution in LTI systems?",
        "answers": {
            "a": "It has no significance.",
            "b": "It is used extensively in systems theory and has special significance in LTI systems.",
            "c": "It replaces all mathematical operations."
        },
        "correct": "b",
        "reason": "Convolution is used extensively in systems theory and has special significance in LTI systems."
    },
    {
        "lecture": 3,
        "id": 127,
        "question": "What does the commutative property of convolution state?",
        "answers": {
            "a": "x * h = h * x",
            "b": "x * h = x + h",
            "c": "x * h = x - h"
        },
        "correct": "a",
        "reason": "The commutative property of convolution states that x * h = h * x."
    },
    {
        "lecture": 3,
        "id": 128,
        "question": "What is the associative property of convolution?",
        "answers": {
            "a": "x * (h + g) = x * h + x * g",
            "b": "(x * h) * g = x * (h * g)",
            "c": "x * h = h * x"
        },
        "correct": "b",
        "reason": "The associative property of convolution states that (x * h) * g = x * (h * g)."
    },
    {
        "lecture": 3,
        "id": 129,
        "question": "What is the distributive property of convolution?",
        "answers": {
            "a": "x * (h + g) = x * h + x * g",
            "b": "(x * h) * g = x * (h * g)",
            "c": "x * h = h * x"
        },
        "correct": "a",
        "reason": "The distributive property of convolution states that x * (h + g) = x * h + x * g."
    },
    {
        "lecture": 3,
        "id": 130,
        "question": "How can any function x(t) be represented using impulse functions?",
        "answers": {
            "a": "x(t) = x(t) * δ(t)",
            "b": "x(t) = ∫ x(τ)δ(t - τ) dτ",
            "c": "x(t) = x(t) + δ(t)"
        },
        "correct": "b",
        "reason": "Any function x(t) can be represented using impulse functions as x(t) = ∫ x(τ)δ(t - τ) dτ."
    },
    {
        "lecture": 3,
        "id": 131,
        "question": "What is the convolutional identity?",
        "answers": {
            "a": "δ(t) * h(t)",
            "b": "x(t) * δ(t) = x(t)",
            "c": "x(t) + δ(t)"
        },
        "correct": "b",
        "reason": "The convolutional identity states that x(t) * δ(t) = x(t)."
    },
    {
        "lecture": 3,
        "id": 132,
        "question": "What does periodic convolution address?",
        "answers": {
            "a": "The convolution of non-periodic functions.",
            "b": "The convolution of two periodic functions.",
            "c": "The convolution of random signals."
        },
        "correct": "b",
        "reason": "Periodic convolution addresses the convolution of two periodic functions."
    },
    {
        "lecture": 3,
        "id": 133,
        "question": "How is periodic convolution denoted for T-periodic functions x and h?",
        "answers": {
            "a": "x * h",
            "b": "x @ h",
            "c": "x + h"
        },
        "correct": "b",
        "reason": "Periodic convolution for T-periodic functions is denoted as x @ h."
    },
    {
        "lecture": 3,
        "id": 134,
        "question": "What is the impulse response of a system?",
        "answers": {
            "a": "The output response to a unit step input.",
            "b": "The response to an impulse input δ(t).",
            "c": "The average response over time."
        },
        "correct": "b",
        "reason": "The impulse response is the response to an impulse input δ(t)."
    },
    {
        "lecture": 3,
        "id": 135,
        "question": "What relationship does the impulse response of an LTI system provide?",
        "answers": {
            "a": "y = x * h",
            "b": "y = x + h",
            "c": "y = x / h"
        },
        "correct": "a",
        "reason": "The impulse response provides the relationship y = x * h for LTI systems."
    },
    {
        "lecture": 3,
        "id": 136,
        "question": "How can the impulse response be determined from the step response?",
        "answers": {
            "a": "By integration.",
            "b": "By differentiation.",
            "c": "By averaging."
        },
        "correct": "b",
        "reason": "The impulse response can be determined from the step response by differentiation."
    },
    {
        "lecture": 3,
        "id": 137,
        "question": "What does a block diagram representation of an LTI system often include?",
        "answers": {
            "a": "Its transfer function.",
            "b": "Its impulse response.",
            "c": "Its output response."
        },
        "correct": "b",
        "reason": "A block diagram representation of an LTI system often includes its impulse response."
    },
    {
        "lecture": 3,
        "id": 138,
        "question": "What is the series interconnection of LTI systems?",
        "answers": {
            "a": "It is characterized by the sum of impulse responses.",
            "b": "It is characterized by the convolution of impulse responses.",
            "c": "It has no significant change."
        },
        "correct": "b",
        "reason": "The series interconnection of LTI systems is characterized by the convolution of impulse responses."
    },
    {
        "lecture": 3,
        "id": 139,
        "question": "What is the parallel interconnection of LTI systems?",
        "answers": {
            "a": "It is characterized by the sum of impulse responses.",
            "b": "It is characterized by the convolution of impulse responses.",
            "c": "It has no significant change."
        },
        "correct": "a",
        "reason": "The parallel interconnection of LTI systems is characterized by the sum of impulse responses."
    },
    {
        "lecture": 3,
        "id": 140,
        "question": "When is an LTI system considered memoryless?",
        "answers": {
            "a": "If its impulse response h(t) is non-zero for all t.",
            "b": "If its impulse response h(t) is zero for all t ≠ 0.",
            "c": "If it only depends on past inputs."
        },
        "correct": "b",
        "reason": "An LTI system is memoryless if its impulse response h(t) is zero for all t ≠ 0."
    },
    {
        "lecture": 3,
        "id": 141,
        "question": "What characterizes a causal LTI system?",
        "answers": {
            "a": "Its impulse response h(t) is non-zero for t > 0.",
            "b": "Its impulse response h(t) is zero for all t < 0.",
            "c": "Its impulse response h(t) is non-zero for all t."
        },
        "correct": "b",
        "reason": "A causal LTI system has an impulse response h(t) that is zero for all t < 0."
    },
    {
        "lecture": 3,
        "id": 142,
        "question": "What is required for an LTI system to be invertible?",
        "answers": {
            "a": "Its impulse response h(t) must be zero.",
            "b": "There must exist a function h^-1(t) such that h * h^-1 = δ(t).",
            "c": "Its impulse response must be constant."
        },
        "correct": "b",
        "reason": "An LTI system is invertible if there exists a function h^-1(t) such that h * h^-1 = δ(t)."
    },
    {
        "lecture": 3,
        "id": 143,
        "question": "What condition must be met for an LTI system to be BIBO stable?",
        "answers": {
            "a": "The impulse response must be zero.",
            "b": "The impulse response must be absolutely integrable.",
            "c": "The system must be causal."
        },
        "correct": "b",
        "reason": "An LTI system is BIBO stable if its impulse response is absolutely integrable."
    },
    {
        "lecture": 3,
        "id": 144,
        "question": "What is an eigenfunction of a system?",
        "answers": {
            "a": "A function that remains unchanged when passed through the system.",
            "b": "A function whose output is a scaled version of the input.",
            "c": "A function that is only applicable to non-LTI systems."
        },
        "correct": "b",
        "reason": "An eigenfunction of a system is a function whose output is a scaled version of the input."
    },
    {
        "lecture": 3,
        "id": 145,
        "question": "Which functions are eigenfunctions of all LTI systems?",
        "answers": {
            "a": "Sine and cosine functions.",
            "b": "Complex exponentials.",
            "c": "Polynomials."
        },
        "correct": "b",
        "reason": "Complex exponentials are eigenfunctions of all LTI systems."
    },
    {
        "lecture": 3,
        "id": 146,
        "question": "What is the system function (or transfer function) of an LTI system?",
        "answers": {
            "a": "The Fourier transform of its impulse response.",
            "b": "The Laplace transform of its output.",
            "c": "The time-domain response."
        },
        "correct": "a",
        "reason": "The system function (or transfer function) is the Fourier transform of the LTI system's impulse response."
    },
    {
        "lecture": 3,
        "id": 147,
        "question": "How can the output of an LTI system be determined without using convolution?",
        "answers": {
            "a": "By using the Laplace transform.",
            "b": "By expressing the input as a linear combination of complex exponentials.",
            "c": "By direct integration."
        },
        "correct": "b",
        "reason": "The output can be determined by expressing the input as a linear combination of complex exponentials."
    },
    {
        "lecture": 3,
        "id": 148,
        "question": "What does the impulse response h(t) of a system represent?",
        "answers": {
            "a": "The system's response to a unit step input.",
            "b": "The system's response to a delta function input.",
            "c": "The system's output for any arbitrary input."
        },
        "correct": "b",
        "reason": "The impulse response h(t) represents the system's response to a delta function input."
    },
    {
        "lecture": 3,
        "id": 149,
        "question": "What is a key feature of LTI systems regarding impulse response?",
        "answers": {
            "a": "They do not have an impulse response.",
            "b": "They are completely characterized by their impulse response.",
            "c": "Their impulse response changes with time."
        },
        "correct": "b",
        "reason": "LTI systems are completely characterized by their impulse response."
    },
    {
        "lecture": 3,
        "id": 150,
        "question": "What is the practical approach to finding the impulse response from the step response?",
        "answers": {
            "a": "Integration.",
            "b": "Differentiation.",
            "c": "Averaging."
        },
        "correct": "b",
        "reason": "The practical approach is to differentiate the step response to find the impulse response."
    },
    {
        "lecture": 3,
        "id": 151,
        "question": "What does the term BIBO stand for in system stability?",
        "answers": {
            "a": "Bounded Input Bounded Output",
            "b": "Balanced Input Balanced Output",
            "c": "Base Input Base Output"
        },
        "correct": "a",
        "reason": "BIBO stands for Bounded Input Bounded Output."
    },
    {
        "lecture": 3,
        "id": 152,
        "question": "What role does the impulse function δ(t) play in convolution?",
        "answers": {
            "a": "It is the convolutional identity.",
            "b": "It represents a zero function.",
            "c": "It is used only in non-LTI systems."
        },
        "correct": "a",
        "reason": "The impulse function δ(t) is the convolutional identity."
    },
    {
        "lecture": 3,
        "id": 153,
        "question": "What is the response of a causal LTI system with an impulse response h(t)?",
        "answers": {
            "a": "h(t) for all t < 0",
            "b": "0 for all t < 0",
            "c": "h(t) for all t > 0"
        },
        "correct": "b",
        "reason": "A causal LTI system has an impulse response of 0 for all t < 0."
    },
    {
        "lecture": 3,
        "id": 154,
        "question": "What does the term 'eigenvalue' refer to in the context of LTI systems?",
        "answers": {
            "a": "The output response of the system.",
            "b": "The scaling factor for an eigenfunction.",
            "c": "The system's transfer function."
        },
        "correct": "b",
        "reason": "In LTI systems, the eigenvalue is the scaling factor for an eigenfunction."
    },
    {
        "lecture": 3,
        "id": 155,
        "question": "What does the Fourier transform of an impulse response h(t) provide?",
        "answers": {
            "a": "The impulse response in the time domain.",
            "b": "The system function or transfer function.",
            "c": "The inverse Laplace transform."
        },
        "correct": "b",
        "reason": "The Fourier transform of h(t) provides the system function or transfer function."
    },
    {
        "lecture": 3,
        "id": 156,
        "question": "How is the impulse response h(t) of a memoryless LTI system characterized?",
        "answers": {
            "a": "h(t) = Kδ(t)",
            "b": "h(t) = 0 for all t ≠ 0",
            "c": "h(t) = K for all t"
        },
        "correct": "a",
        "reason": "A memoryless LTI system has an impulse response h(t) = Kδ(t)."
    },
    {
        "lecture": 3,
        "id": 157,
        "question": "What does the term 'causal signal' refer to?",
        "answers": {
            "a": "A signal that is zero for all t < 0.",
            "b": "A signal that changes randomly.",
            "c": "A signal with a constant amplitude."
        },
        "correct": "a",
        "reason": "A causal signal is one that is zero for all t < 0."
    },
    {
        "lecture": 3,
        "id": 158,
        "question": "What is the practical significance of the step response of a system?",
        "answers": {
            "a": "It provides information about the system's impulse response.",
            "b": "It is used only in non-LTI systems.",
            "c": "It cannot be used to determine the impulse response."
        },
        "correct": "a",
        "reason": "The step response provides information about the system's impulse response."
    },
    {
        "lecture": 3,
        "id": 159,
        "question": "What does the term 'absolutely integrable' refer to in BIBO stability?",
        "answers": {
            "a": "The integral of the absolute value of the impulse response is finite.",
            "b": "The integral of the impulse response is zero.",
            "c": "The integral of the impulse response is infinite."
        },
        "correct": "a",
        "reason": "An impulse response is absolutely integrable if the integral of its absolute value is finite."
    },
    {
        "lecture": 3,
        "id": 160,
        "question": "Which property allows for the representation of any signal using eigenfunctions in an LTI system?",
        "answers": {
            "a": "Commutativity",
            "b": "Superposition",
            "c": "Eigenfunction representation"
        },
        "correct": "c",
        "reason": "Eigenfunction representation allows any signal to be represented using eigenfunctions in an LTI system."
    },
    {
        "lecture": 3,
        "id": 161,
        "question": "What is the output of an LTI system if the input is a complex exponential?",
        "answers": {
            "a": "A sine wave.",
            "b": "The same complex exponential scaled by the system function.",
            "c": "A constant value."
        },
        "correct": "b",
        "reason": "The output is the same complex exponential scaled by the system function."
    },
    {
        "lecture": 3,
        "id": 162,
        "question": "What is the role of the transfer function in an LTI system?",
        "answers": {
            "a": "It represents the time-domain response.",
            "b": "It characterizes the frequency response.",
            "c": "It averages the input and output."
        },
        "correct": "b",
        "reason": "The transfer function characterizes the frequency response of an LTI system."
    },
    {
        "lecture": 3,
        "id": 163,
        "question": "How can convolution be described in terms of signal processing?",
        "answers": {
            "a": "As multiplication of two signals.",
            "b": "As averaging of two signals.",
            "c": "As a weighted sum of one signal with a shifted version of another."
        },
        "correct": "c",
        "reason": "Convolution is a weighted sum of one signal with a shifted version of another."
    },
    {
        "lecture": 3,
        "id": 164,
        "question": "What is the mathematical representation of convolution for continuous-time signals?",
        "answers": {
            "a": "x(t) + h(t)",
            "b": "∫ x(τ)h(t - τ) dτ",
            "c": "x(t) / h(t)"
        },
        "correct": "b",
        "reason": "Convolution for continuous-time signals is represented as ∫ x(τ)h(t - τ) dτ."
    },
    {
        "lecture": 3,
        "id": 165,
        "question": "What type of signals are complex exponentials in the context of LTI systems?",
        "answers": {
            "a": "Eigenfunctions",
            "b": "Impulse responses",
            "c": "Random signals"
        },
        "correct": "a",
        "reason": "Complex exponentials are eigenfunctions of LTI systems."
    },
    {
        "lecture": 3,
        "id": 166,
        "question": "How is the Fourier transform of an impulse function δ(t) represented?",
        "answers": {
            "a": "As a constant function",
            "b": "As a sine function",
            "c": "As a delta function"
        },
        "correct": "a",
        "reason": "The Fourier transform of δ(t) is a constant function."
    },
    {
        "lecture": 3,
        "id": 167,
        "question": "What is the key characteristic of an LTI system's response to an impulse input?",
        "answers": {
            "a": "The response is random.",
            "b": "The response is the system's impulse response.",
            "c": "The response is zero."
        },
        "correct": "b",
        "reason": "The key characteristic is that the response to an impulse input is the system's impulse response."
    },
    {
        "lecture": 3,
        "id": 168,
        "question": "What defines the stability of an LTI system?",
        "answers": {
            "a": "The response to a step input.",
            "b": "The absolute integrability of the impulse response.",
            "c": "The magnitude of the eigenvalues."
        },
        "correct": "b",
        "reason": "The stability of an LTI system is defined by the absolute integrability of the impulse response."
    },
    {
        "lecture": 3,
        "id": 169,
        "question": "What is the impact of convolution on the frequency domain representation of signals?",
        "answers": {
            "a": "It adds the signals.",
            "b": "It multiplies the Fourier transforms of the signals.",
            "c": "It subtracts the signals."
        },
        "correct": "b",
        "reason": "In the frequency domain, convolution multiplies the Fourier transforms of the signals."
    },
    {
        "lecture": 3,
        "id": 170,
        "question": "What is the primary use of block diagram representation in LTI systems?",
        "answers": {
            "a": "To show the time-domain response.",
            "b": "To illustrate the structure and components of the system.",
            "c": "To replace mathematical analysis."
        },
        "correct": "b",
        "reason": "Block diagrams are used to illustrate the structure and components of LTI systems."
    },
    {
        "lecture": 3,
        "id": 171,
        "question": "What is the convolution of a signal with a delta function?",
        "answers": {
            "a": "The original signal.",
            "b": "A zero signal.",
            "c": "A constant signal."
        },
        "correct": "a",
        "reason": "The convolution of a signal with a delta function yields the original signal."
    },
    {
        "lecture": 3,
        "id": 172,
        "question": "What is the relationship between step response and impulse response in an LTI system?",
        "answers": {
            "a": "Step response is the integral of the impulse response.",
            "b": "Step response is the derivative of the impulse response.",
            "c": "There is no direct relationship."
        },
        "correct": "a",
        "reason": "The step response is the integral of the impulse response in an LTI system."
    },
    {
        "lecture": 4,
        "id": 173,
        "question": "What does the Fourier series represent?",
        "answers": {
            "a": "Non-periodic signals",
            "b": "Periodic signals",
            "c": "Random signals"
        },
        "correct": "b",
        "reason": "The Fourier series represents periodic signals."
    },
    {
        "lecture": 4,
        "id": 174,
        "question": "What is a signal represented as in a Fourier series?",
        "answers": {
            "a": "Sum of polynomials",
            "b": "Linear combination of complex sinusoids",
            "c": "Product of trigonometric functions"
        },
        "correct": "b",
        "reason": "A signal is represented as a linear combination of complex sinusoids in a Fourier series."
    },
    {
        "lecture": 4,
        "id": 175,
        "question": "Why are complex sinusoids used in Fourier series?",
        "answers": {
            "a": "They are non-continuous",
            "b": "They are easy to integrate and differentiate",
            "c": "They are difficult to handle"
        },
        "correct": "b",
        "reason": "Complex sinusoids are continuous, differentiable, and easy to integrate and differentiate."
    },
    {
        "lecture": 4,
        "id": 176,
        "question": "What property do complex sinusoids have in LTI systems?",
        "answers": {
            "a": "They are eigenfunctions",
            "b": "They are not applicable",
            "c": "They transform into random signals"
        },
        "correct": "a",
        "reason": "Complex sinusoids are eigenfunctions of LTI systems."
    },
    {
        "lecture": 4,
        "id": 177,
        "question": "When are complex sinusoids considered harmonically related?",
        "answers": {
            "a": "When their frequencies are multiples of different constants",
            "b": "When their fundamental frequencies are integer multiples of a common base frequency",
            "c": "When they have no relation"
        },
        "correct": "b",
        "reason": "Complex sinusoids are harmonically related if their fundamental frequencies are integer multiples of a common base frequency."
    },
    {
        "lecture": 4,
        "id": 178,
        "question": "What is the fundamental frequency of the kth complex sinusoid?",
        "answers": {
            "a": "k",
            "b": "kω₀",
            "c": "ω₀/k"
        },
        "correct": "b",
        "reason": "The fundamental frequency of the kth complex sinusoid is kω₀."
    },
    {
        "lecture": 4,
        "id": 179,
        "question": "What is the period of a linear combination of harmonically related complex sinusoids?",
        "answers": {
            "a": "2π/ω₀",
            "b": "1/ω₀",
            "c": "ω₀"
        },
        "correct": "a",
        "reason": "The period is 2π/ω₀."
    },
    {
        "lecture": 4,
        "id": 180,
        "question": "What does the Fourier series synthesis equation represent?",
        "answers": {
            "a": "The original signal in time domain",
            "b": "The decomposition of the signal in frequency domain",
            "c": "The noise component of the signal"
        },
        "correct": "a",
        "reason": "The Fourier series synthesis equation represents the original signal in the time domain."
    },
    {
        "lecture": 4,
        "id": 181,
        "question": "What do the terms in the Fourier series summation represent?",
        "answers": {
            "a": "The signal's random noise",
            "b": "Harmonic components of the signal",
            "c": "Unrelated frequencies"
        },
        "correct": "b",
        "reason": "The terms represent the harmonic components of the signal."
    },
    {
        "lecture": 4,
        "id": 182,
        "question": "How are the Fourier series coefficients cₖ calculated?",
        "answers": {
            "a": "Using differentiation",
            "b": "Using integration over one period",
            "c": "Using multiplication"
        },
        "correct": "b",
        "reason": "The coefficients are calculated using integration over one period."
    },
    {
        "lecture": 4,
        "id": 183,
        "question": "What form can the Fourier series take if the signal x(t) is real?",
        "answers": {
            "a": "Trigonometric forms",
            "b": "Polynomial forms",
            "c": "Exponential forms"
        },
        "correct": "a",
        "reason": "If x(t) is real, the Fourier series can be written in trigonometric forms."
    },
    {
        "lecture": 4,
        "id": 184,
        "question": "What does the combined trigonometric form of a Fourier series include?",
        "answers": {
            "a": "Only sine functions",
            "b": "Cosine functions with phase shifts",
            "c": "Logarithmic functions"
        },
        "correct": "b",
        "reason": "The combined trigonometric form includes cosine functions with phase shifts."
    },
    {
        "lecture": 4,
        "id": 185,
        "question": "In the trigonometric form of a Fourier series, what do aₖ and bₖ represent?",
        "answers": {
            "a": "Real and imaginary parts of the coefficients",
            "b": "Magnitudes and phases",
            "c": "Sine and cosine coefficients"
        },
        "correct": "c",
        "reason": "aₖ and bₖ represent the sine and cosine coefficients."
    },
    {
        "lecture": 4,
        "id": 186,
        "question": "What must be considered for the convergence of a Fourier series?",
        "answers": {
            "a": "Whether the infinite sum converges",
            "b": "If the signal is finite",
            "c": "The amplitude of the signal"
        },
        "correct": "a",
        "reason": "The convergence of the infinite sum must be considered."
    },
    {
        "lecture": 4,
        "id": 187,
        "question": "What does pointwise convergence mean for a Fourier series?",
        "answers": {
            "a": "The series converges to different values",
            "b": "The series converges to the signal value at each point",
            "c": "The series does not converge"
        },
        "correct": "b",
        "reason": "Pointwise convergence means the series converges to the signal value at each point."
    },
    {
        "lecture": 4,
        "id": 188,
        "question": "What does the Mean-Squared Error (MSE) convergence ensure?",
        "answers": {
            "a": "The error energy goes to zero",
            "b": "The signal oscillates",
            "c": "The signal does not converge"
        },
        "correct": "a",
        "reason": "MSE convergence ensures the error energy goes to zero."
    },
    {
        "lecture": 4,
        "id": 189,
        "question": "What is uniform convergence in the context of Fourier series?",
        "answers": {
            "a": "The series diverges",
            "b": "The series converges at different rates",
            "c": "The series converges at the same rate everywhere"
        },
        "correct": "c",
        "reason": "Uniform convergence means the series converges at the same rate everywhere."
    },
    {
        "lecture": 4,
        "id": 190,
        "question": "Under what condition does the Fourier series converge uniformly for continuous signals?",
        "answers": {
            "a": "When coefficients are absolutely summable",
            "b": "When the signal is finite",
            "c": "When the signal is odd"
        },
        "correct": "a",
        "reason": "The Fourier series converges uniformly if the coefficients are absolutely summable."
    },
    {
        "lecture": 4,
        "id": 191,
        "question": "What is Gibbs Phenomenon?",
        "answers": {
            "a": "Convergence of Fourier series near discontinuities",
            "b": "Divergence of Fourier series everywhere",
            "c": "Constant peak amplitude of ripples near discontinuities"
        },
        "correct": "c",
        "reason": "Gibbs Phenomenon refers to the constant peak amplitude of ripples near discontinuities."
    },
    {
        "lecture": 4,
        "id": 192,
        "question": "What property of a Fourier series is exploited in signal filtering?",
        "answers": {
            "a": "Time domain representation",
            "b": "Frequency domain representation",
            "c": "Spatial domain representation"
        },
        "correct": "b",
        "reason": "The frequency domain representation of a Fourier series is exploited in signal filtering."
    },
    {
        "lecture": 4,
        "id": 193,
        "question": "What happens to a complex sinusoid when passed through an LTI system?",
        "answers": {
            "a": "It becomes a polynomial",
            "b": "It maintains its form",
            "c": "It transforms into noise"
        },
        "correct": "b",
        "reason": "A complex sinusoid maintains its form when passed through an LTI system."
    },
    {
        "lecture": 4,
        "id": 194,
        "question": "What is the purpose of a lowpass filter?",
        "answers": {
            "a": "To pass high frequencies",
            "b": "To pass low frequencies",
            "c": "To pass all frequencies equally"
        },
        "correct": "b",
        "reason": "A lowpass filter is used to pass low frequencies."
    },
    {
        "lecture": 4,
        "id": 195,
        "question": "What is a highpass filter used for?",
        "answers": {
            "a": "To attenuate high frequencies",
            "b": "To pass high frequencies",
            "c": "To pass low frequencies"
        },
        "correct": "b",
        "reason": "A highpass filter is used to pass high frequencies."
    },
    {
        "lecture": 4,
        "id": 196,
        "question": "Which filter type passes frequencies within a certain range and attenuates others?",
        "answers": {
            "a": "Lowpass filter",
            "b": "Bandpass filter",
            "c": "Highpass filter"
        },
        "correct": "b",
        "reason": "A bandpass filter passes frequencies within a certain range and attenuates others."
    },
    {
        "lecture": 4,
        "id": 197,
        "question": "What is the magnitude spectrum of a signal?",
        "answers": {
            "a": "The real part of the Fourier coefficients",
            "b": "The absolute values of the Fourier coefficients",
            "c": "The imaginary part of the Fourier coefficients"
        },
        "correct": "b",
        "reason": "The magnitude spectrum is the absolute values of the Fourier coefficients."
    },
    {
        "lecture": 4,
        "id": 198,
        "question": "What does the phase spectrum represent?",
        "answers": {
            "a": "The amplitude of the signal",
            "b": "The angles of the Fourier coefficients",
            "c": "The frequency of the signal"
        },
        "correct": "b",
        "reason": "The phase spectrum represents the angles of the Fourier coefficients."
    },
    {
        "lecture": 4,
        "id": 199,
        "question": "What happens when a signal is shifted in time?",
        "answers": {
            "a": "The magnitude of the Fourier coefficients changes",
            "b": "The phase of the Fourier coefficients changes",
            "c": "The frequency content of the signal changes"
        },
        "correct": "b",
        "reason": "Shifting a signal in time changes the phase of the Fourier coefficients."
    },
    {
        "lecture": 4,
        "id": 200,
        "question": "What does time reversal of a signal affect in its Fourier series representation?",
        "answers": {
            "a": "Reverses the coefficients",
            "b": "Squares the coefficients",
            "c": "Eliminates the coefficients"
        },
        "correct": "a",
        "reason": "Time reversal of a signal reverses the coefficients."
    },
    {
        "lecture": 4,
        "id": 201,
        "question": "What is the effect of conjugating a signal on its Fourier coefficients?",
        "answers": {
            "a": "It reverses and conjugates the coefficients",
            "b": "It squares the coefficients",
            "c": "It eliminates the coefficients"
        },
        "correct": "a",
        "reason": "Conjugating a signal reverses and conjugates the coefficients."
    },
    {
        "lecture": 4,
        "id": 202,
        "question": "What symmetry do the Fourier coefficients have for an even signal?",
        "answers": {
            "a": "Odd symmetry",
            "b": "Even symmetry",
            "c": "No symmetry"
        },
        "correct": "b",
        "reason": "Even signals have even symmetry in their Fourier coefficients."
    },
    {
        "lecture": 4,
        "id": 203,
        "question": "What is true about the Fourier coefficients of an odd signal?",
        "answers": {
            "a": "They have even symmetry",
            "b": "They have odd symmetry",
            "c": "They have no symmetry"
        },
        "correct": "b",
        "reason": "Odd signals have odd symmetry in their Fourier coefficients."
    },
    {
        "lecture": 4,
        "id": 204,
        "question": "What happens to the Fourier coefficients if the signal is real?",
        "answers": {
            "a": "They become imaginary",
            "b": "They exhibit conjugate symmetry",
            "c": "They become random"
        },
        "correct": "b",
        "reason": "If the signal is real, the Fourier coefficients exhibit conjugate symmetry."
    },
    {
        "lecture": 4,
        "id": 205,
        "question": "How are the Fourier coefficients related to each other in a real signal?",
        "answers": {
            "a": "They are equal",
            "b": "They are conjugate symmetric",
            "c": "They are unrelated"
        },
        "correct": "b",
        "reason": "The Fourier coefficients are conjugate symmetric in a real signal."
    },
    {
        "lecture": 4,
        "id": 206,
        "question": "What is the energy spectrum of a signal?",
        "answers": {
            "a": "The square of the magnitude spectrum",
            "b": "The real part of the Fourier coefficients",
            "c": "The phase spectrum"
        },
        "correct": "a",
        "reason": "The energy spectrum is the square of the magnitude spectrum."
    },
    {
        "lecture": 4,
        "id": 207,
        "question": "What is the purpose of analyzing the frequency domain of a signal?",
        "answers": {
            "a": "To understand time variations",
            "b": "To analyze the signal's frequency content",
            "c": "To eliminate noise"
        },
        "correct": "b",
        "reason": "Analyzing the frequency domain helps to understand the signal's frequency content."
    },
    {
        "lecture": 4,
        "id": 208,
        "question": "What type of filter allows low frequencies to pass through and attenuates high frequencies?",
        "answers": {
            "a": "Bandpass filter",
            "b": "Lowpass filter",
            "c": "Highpass filter"
        },
        "correct": "b",
        "reason": "A lowpass filter allows low frequencies to pass through and attenuates high frequencies."
    },
    {
        "lecture": 4,
        "id": 209,
        "question": "What is the key characteristic of a bandpass filter?",
        "answers": {
            "a": "It passes low frequencies only",
            "b": "It attenuates all frequencies equally",
            "c": "It passes frequencies within a certain range"
        },
        "correct": "c",
        "reason": "A bandpass filter passes frequencies within a certain range."
    },
    {
        "lecture": 4,
        "id": 210,
        "question": "What is an example of a property exploited in Fourier series when filtering signals?",
        "answers": {
            "a": "Time domain manipulation",
            "b": "Frequency domain manipulation",
            "c": "Space domain manipulation"
        },
        "correct": "b",
        "reason": "Frequency domain manipulation is exploited when filtering signals using Fourier series."
    },
    {
        "lecture": 4,
        "id": 211,
        "question": "What is the primary advantage of using complex sinusoids in Fourier series?",
        "answers": {
            "a": "They are non-continuous",
            "b": "They are easily integrable and differentiable",
            "c": "They have no advantage"
        },
        "correct": "b",
        "reason": "Complex sinusoids are easily integrable and differentiable, making them advantageous for use in Fourier series."
    },
    {
        "lecture": 4,
        "id": 212,
        "question": "What does the Fourier series analysis equation provide?",
        "answers": {
            "a": "The time-domain signal",
            "b": "The Fourier series coefficients",
            "c": "The phase spectrum"
        },
        "correct": "b",
        "reason": "The Fourier series analysis equation provides the Fourier series coefficients."
    },
    {
        "lecture": 4,
        "id": 213,
        "question": "What does the term 'harmonically related' imply about the sinusoids in a Fourier series?",
        "answers": {
            "a": "They have unrelated frequencies",
            "b": "Their frequencies are integer multiples of a fundamental frequency",
            "c": "They have random frequencies"
        },
        "correct": "b",
        "reason": "Harmonically related sinusoids have frequencies that are integer multiples of a fundamental frequency."
    },
    {
        "lecture": 4,
        "id": 214,
        "question": "In what sense can the error between the actual signal and its Fourier series approximation be measured?",
        "answers": {
            "a": "By the amplitude only",
            "b": "In the mean-squared error (MSE) sense",
            "c": "By the phase only"
        },
        "correct": "b",
        "reason": "The error can be measured in the mean-squared error (MSE) sense."
    },
    {
        "lecture": 4,
        "id": 215,
        "question": "What is the significance of the Dirichlet conditions?",
        "answers": {
            "a": "They determine if a signal is real",
            "b": "They ensure pointwise convergence of the Fourier series",
            "c": "They determine if a signal is periodic"
        },
        "correct": "b",
        "reason": "The Dirichlet conditions ensure pointwise convergence of the Fourier series."
    },
    {
        "lecture": 4,
        "id": 216,
        "question": "What is the typical effect of Gibbs Phenomenon on a Fourier series near discontinuities?",
        "answers": {
            "a": "Reduction of amplitude",
            "b": "Appearance of ripples",
            "c": "Smoothing of the signal"
        },
        "correct": "b",
        "reason": "Gibbs Phenomenon causes the appearance of ripples near discontinuities."
    },
    {
        "lecture": 4,
        "id": 217,
        "question": "How are the Fourier series coefficients of an even function characterized?",
        "answers": {
            "a": "Odd",
            "b": "Even",
            "c": "Random"
        },
        "correct": "b",
        "reason": "The Fourier series coefficients of an even function are even."
    },
    {
        "lecture": 4,
        "id": 218,
        "question": "What is Parseval's relation in the context of Fourier series?",
        "answers": {
            "a": "It relates time-domain signal energy to frequency-domain coefficients",
            "b": "It relates phase spectrum to magnitude spectrum",
            "c": "It relates even and odd symmetry"
        },
        "correct": "a",
        "reason": "Parseval's relation relates the time-domain signal energy to the energy of the Fourier series coefficients."
    },
    {
        "lecture": 4,
        "id": 219,
        "question": "What type of filter eliminates all frequencies outside a certain range?",
        "answers": {
            "a": "Lowpass filter",
            "b": "Highpass filter",
            "c": "Bandpass filter"
        },
        "correct": "c",
        "reason": "A bandpass filter eliminates all frequencies outside a certain range."
    },
    {
        "lecture": 4,
        "id": 220,
        "question": "What does the phase spectrum of a signal represent?",
        "answers": {
            "a": "The signal's time-domain representation",
            "b": "The angle of the Fourier coefficients",
            "c": "The energy of the signal"
        },
        "correct": "b",
        "reason": "The phase spectrum represents the angle of the Fourier coefficients."
    },
    {
        "lecture": 4,
        "id": 221,
        "question": "What does an ideal highpass filter do?",
        "answers": {
            "a": "Passes all frequencies equally",
            "b": "Eliminates low frequencies",
            "c": "Eliminates high frequencies"
        },
        "correct": "b",
        "reason": "An ideal highpass filter eliminates low frequencies."
    },
    {
        "lecture": 4,
        "id": 222,
        "question": "What happens to the Fourier series coefficients when a signal is time-reversed?",
        "answers": {
            "a": "They become even",
            "b": "They are time-reversed",
            "c": "They are conjugated"
        },
        "correct": "b",
        "reason": "Time-reversing a signal results in time-reversed Fourier series coefficients."
    },
    {
        "lecture": 5,
        "id": 223,
        "question": "Which representation is extremely useful for periodic signals?",
        "answers": {
            "a": "Laplace Transform",
            "b": "Fourier Series",
            "c": "Z-Transform"
        },
        "correct": "b",
        "reason": "Fourier Series provide an extremely useful representation for periodic signals."
    },
    {
        "lecture": 5,
        "id": 224,
        "question": "Which tool is more general and can represent both periodic and aperiodic signals?",
        "answers": {
            "a": "Fourier Series",
            "b": "Laplace Transform",
            "c": "Fourier Transform"
        },
        "correct": "c",
        "reason": "The Fourier Transform can be used to represent both periodic and aperiodic signals."
    },
    {
        "lecture": 5,
        "id": 225,
        "question": "How is the Fourier Transform derived?",
        "answers": {
            "a": "By using Laplace Transforms",
            "b": "Through a limiting process from Fourier Series",
            "c": "By differentiating Fourier Series"
        },
        "correct": "b",
        "reason": "The Fourier Transform is essentially derived from Fourier Series through a limiting process."
    },
    {
        "lecture": 5,
        "id": 226,
        "question": "What is the notation for the continuous-time Fourier Transform of a signal x(t)?",
        "answers": {
            "a": "X(f)",
            "b": "X(s)",
            "c": "X(ω)"
        },
        "correct": "c",
        "reason": "The notation for the continuous-time Fourier Transform of a signal x(t) is X(ω)."
    },
    {
        "lecture": 5,
        "id": 227,
        "question": "What is the inverse Fourier Transform of X(ω)?",
        "answers": {
            "a": "X(t) = ∫ X(ω)e^(-jωt)dω",
            "b": "x(t) = (1/2π) ∫ X(ω)e^(jωt)dω",
            "c": "x(t) = ∫ X(ω)e^(jωt)dω"
        },
        "correct": "b",
        "reason": "The inverse Fourier Transform of X(ω) is given by (1/2π) ∫ X(ω)e^(jωt)dω."
    },
    {
        "lecture": 5,
        "id": 228,
        "question": "Which property does the Fourier Transform share with Fourier Series?",
        "answers": {
            "a": "Both are used only for periodic signals",
            "b": "Both have similar convergence properties",
            "c": "Both are derived using Laplace Transforms"
        },
        "correct": "b",
        "reason": "Since the Fourier Transform is derived from Fourier Series, it shares similar convergence properties."
    },
    {
        "lecture": 5,
        "id": 229,
        "question": "What does the linearity property of the Fourier Transform state?",
        "answers": {
            "a": "x(t) = X(ω)",
            "b": "a1x1(t) + a2x2(t) ↔ a1X1(ω) + a2X2(ω)",
            "c": "x(t - t0) ↔ e^(-jωt0)X(ω)"
        },
        "correct": "b",
        "reason": "The linearity property states that a1x1(t) + a2x2(t) ↔ a1X1(ω) + a2X2(ω)."
    },
    {
        "lecture": 5,
        "id": 230,
        "question": "What is the time-domain shifting property of the Fourier Transform?",
        "answers": {
            "a": "x(t) ↔ X(ω)",
            "b": "x(t - t0) ↔ e^(-jωt0)X(ω)",
            "c": "e^(jω0t)x(t) ↔ X(ω - ω0)"
        },
        "correct": "b",
        "reason": "The time-domain shifting property is x(t - t0) ↔ e^(-jωt0)X(ω)."
    },
    {
        "lecture": 5,
        "id": 231,
        "question": "What is the frequency-domain shifting property of the Fourier Transform?",
        "answers": {
            "a": "x(t) ↔ X(ω)",
            "b": "x(t - t0) ↔ e^(-jωt0)X(ω)",
            "c": "e^(jω0t)x(t) ↔ X(ω - ω0)"
        },
        "correct": "c",
        "reason": "The frequency-domain shifting property is e^(jω0t)x(t) ↔ X(ω - ω0)."
    },
    {
        "lecture": 5,
        "id": 232,
        "question": "What does the Parseval's relation state?",
        "answers": {
            "a": "Energy in time domain equals energy in frequency domain up to a factor",
            "b": "Frequency domain representation is the same as time domain representation",
            "c": "Fourier Transform preserves all information"
        },
        "correct": "a",
        "reason": "Parseval's relation states that the energy in the time domain equals the energy in the frequency domain up to a factor."
    },
    {
        "lecture": 5,
        "id": 233,
        "question": "Which condition is necessary for the Fourier Transform to converge pointwise?",
        "answers": {
            "a": "The signal must be continuous and absolutely integrable",
            "b": "The signal must have finite energy",
            "c": "The signal must be discrete and periodic"
        },
        "correct": "a",
        "reason": "For pointwise convergence, the signal must be continuous and absolutely integrable."
    },
    {
        "lecture": 5,
        "id": 234,
        "question": "What is the Fourier Transform pair of a delta function δ(t)?",
        "answers": {
            "a": "1",
            "b": "e^(jωt)",
            "c": "cos(ω0t)"
        },
        "correct": "a",
        "reason": "The Fourier Transform pair of a delta function δ(t) is 1."
    },
    {
        "lecture": 5,
        "id": 235,
        "question": "What is the modulation property of the Fourier Transform?",
        "answers": {
            "a": "x(t) ↔ X(ω)",
            "b": "e^(jω0t)x(t) ↔ X(ω - ω0)",
            "c": "x(t - t0) ↔ e^(-jωt0)X(ω)"
        },
        "correct": "b",
        "reason": "The modulation property is e^(jω0t)x(t) ↔ X(ω - ω0)."
    },
    {
        "lecture": 5,
        "id": 236,
        "question": "What is the duality property of the Fourier Transform?",
        "answers": {
            "a": "x(t) ↔ 2πX(-t)",
            "b": "x(t - t0) ↔ e^(-jωt0)X(ω)",
            "c": "x(t) ↔ X(ω)"
        },
        "correct": "a",
        "reason": "The duality property states x(t) ↔ 2πX(-t)."
    },
    {
        "lecture": 5,
        "id": 237,
        "question": "What does the convolution property of the Fourier Transform state?",
        "answers": {
            "a": "x(t) * h(t) ↔ X(ω)H(ω)",
            "b": "x(t) + h(t) ↔ X(ω) + H(ω)",
            "c": "x(t) ↔ X(ω)"
        },
        "correct": "a",
        "reason": "The convolution property states that x(t) * h(t) ↔ X(ω)H(ω)."
    },
    {
        "lecture": 5,
        "id": 238,
        "question": "What is the differentiation property in the time domain for the Fourier Transform?",
        "answers": {
            "a": "x(t) ↔ X(ω)",
            "b": "dx(t)/dt ↔ jωX(ω)",
            "c": "∫ x(t) dt ↔ X(ω)/jω"
        },
        "correct": "b",
        "reason": "The differentiation property in the time domain is dx(t)/dt ↔ jωX(ω)."
    },
    {
        "lecture": 5,
        "id": 239,
        "question": "What is the frequency-domain differentiation property of the Fourier Transform?",
        "answers": {
            "a": "x(t) ↔ X(ω)",
            "b": "t x(t) ↔ j dX(ω)/dω",
            "c": "dx(t)/dt ↔ jωX(ω)"
        },
        "correct": "b",
        "reason": "The frequency-domain differentiation property is t x(t) ↔ j dX(ω)/dω."
    },
    {
        "lecture": 5,
        "id": 240,
        "question": "What is the integration property in the time domain for the Fourier Transform?",
        "answers": {
            "a": "x(t) ↔ X(ω)",
            "b": "dx(t)/dt ↔ jωX(ω)",
            "c": "∫ x(t) dt ↔ X(ω)/jω"
        },
        "correct": "c",
        "reason": "The integration property in the time domain is ∫ x(t) dt ↔ X(ω)/jω."
    },
    {
        "lecture": 5,
        "id": 241,
        "question": "What does the frequency response of an LTI system characterize?",
        "answers": {
            "a": "The time-domain response",
            "b": "The relationship between input and output in the frequency domain",
            "c": "The energy distribution of the system"
        },
        "correct": "b",
        "reason": "The frequency response characterizes the relationship between input and output in the frequency domain."
    },
    {
        "lecture": 5,
        "id": 242,
        "question": "What is the Fourier Transform of a constant signal?",
        "answers": {
            "a": "A delta function",
            "b": "A sine wave",
            "c": "Zero"
        },
        "correct": "a",
        "reason": "The Fourier Transform of a constant signal is a delta function."
    },
    {
        "lecture": 5,
        "id": 243,
        "question": "What does the bandwidth of a signal represent?",
        "answers": {
            "a": "The maximum frequency present in the signal",
            "b": "The range of frequencies within which the signal's power is significant",
            "c": "The total energy of the signal"
        },
        "correct": "b",
        "reason": "The bandwidth of a signal represents the range of frequencies within which the signal's power is significant."
    },
    {
        "lecture": 5,
        "id": 244,
        "question": "What is the Fourier Transform pair for a cosine wave?",
        "answers": {
            "a": "2π[δ(ω - ω0) + δ(ω + ω0)]",
            "b": "δ(t)",
            "c": "1"
        },
        "correct": "a",
        "reason": "The Fourier Transform pair for a cosine wave is 2π[δ(ω - ω0) + δ(ω + ω0)]."
    },
    {
        "lecture": 5,
        "id": 245,
        "question": "What is the duality property in the context of Fourier Transform?",
        "answers": {
            "a": "x(t) ↔ X(ω)",
            "b": "X(t) ↔ 2π x(-ω)",
            "c": "x(t - t0) ↔ e^(-jωt0)X(ω)"
        },
        "correct": "b",
        "reason": "The duality property in the context of Fourier Transform is X(t) ↔ 2π x(-ω)."
    },
    {
        "lecture": 5,
        "id": 246,
        "question": "What does it mean for a signal to be bandlimited?",
        "answers": {
            "a": "It contains all possible frequencies",
            "b": "It contains frequencies only up to a certain maximum value",
            "c": "It has infinite duration in time"
        },
        "correct": "b",
        "reason": "A signal is bandlimited if it contains frequencies only up to a certain maximum value."
    },
    {
        "lecture": 5,
        "id": 247,
        "question": "What does the term 'aliasing' refer to in signal processing?",
        "answers": {
            "a": "The phenomenon where high frequency components fold back into the lower frequencies",
            "b": "The process of reconstructing a signal from its samples",
            "c": "The filtering out of unwanted frequencies"
        },
        "correct": "a",
        "reason": "Aliasing refers to the phenomenon where high frequency components fold back into the lower frequencies."
    },
    {
        "lecture": 5,
        "id": 248,
        "question": "What is the Nyquist rate for a signal with a maximum frequency of B Hz?",
        "answers": {
            "a": "B Hz",
            "b": "2B Hz",
            "c": "B/2 Hz"
        },
        "correct": "b",
        "reason": "The Nyquist rate for a signal with a maximum frequency of B Hz is 2B Hz."
    },
    {
        "lecture": 5,
        "id": 249,
        "question": "What is the function of a lowpass filter?",
        "answers": {
            "a": "To pass high frequencies and attenuate low frequencies",
            "b": "To pass low frequencies and attenuate high frequencies",
            "c": "To pass all frequencies equally"
        },
        "correct": "b",
        "reason": "A lowpass filter passes low frequencies and attenuates high frequencies."
    },
    {
        "lecture": 5,
        "id": 250,
        "question": "What is the Fourier Transform of a unit step function u(t)?",
        "answers": {
            "a": "1",
            "b": "1/(jω) + πδ(ω)",
            "c": "δ(t)"
        },
        "correct": "b",
        "reason": "The Fourier Transform of a unit step function u(t) is 1/(jω) + πδ(ω)."
    },
    {
        "lecture": 5,
        "id": 251,
        "question": "What is the Fourier Transform of an impulse train?",
        "answers": {
            "a": "Another impulse train",
            "b": "A constant function",
            "c": "A sine wave"
        },
        "correct": "a",
        "reason": "The Fourier Transform of an impulse train is another impulse train."
    },
    {
        "lecture": 5,
        "id": 252,
        "question": "What type of modulation is used in Amplitude Modulation (AM)?",
        "answers": {
            "a": "Phase modulation",
            "b": "Frequency modulation",
            "c": "Amplitude modulation"
        },
        "correct": "c",
        "reason": "Amplitude Modulation (AM) involves modulating the amplitude of the carrier signal."
    },
    {
        "lecture": 5,
        "id": 253,
        "question": "What is Double-Sideband Suppressed-Carrier (DSB-SC) AM?",
        "answers": {
            "a": "Transmits only one sideband and the carrier",
            "b": "Transmits both sidebands without the carrier",
            "c": "Transmits only the carrier"
        },
        "correct": "b",
        "reason": "Double-Sideband Suppressed-Carrier (DSB-SC) AM transmits both sidebands without the carrier."
    },
    {
        "lecture": 5,
        "id": 254,
        "question": "What is the advantage of Single-Sideband Suppressed-Carrier (SSB-SC) AM over DSB-SC AM?",
        "answers": {
            "a": "It is easier to demodulate",
            "b": "It requires less bandwidth",
            "c": "It has a higher power requirement"
        },
        "correct": "b",
        "reason": "Single-Sideband Suppressed-Carrier (SSB-SC) AM requires less bandwidth than DSB-SC AM."
    },
    {
        "lecture": 5,
        "id": 255,
        "question": "What is the output spectrum of an LTI system with input X(ω) and frequency response H(ω)?",
        "answers": {
            "a": "X(ω)",
            "b": "H(ω)",
            "c": "X(ω)H(ω)"
        },
        "correct": "c",
        "reason": "The output spectrum of an LTI system is given by X(ω)H(ω)."
    },
    {
        "lecture": 5,
        "id": 256,
        "question": "What is the Magnitude Response of an LTI system?",
        "answers": {
            "a": "The phase shift at each frequency",
            "b": "The magnitude of the output signal",
            "c": "The magnitude of H(ω)"
        },
        "correct": "c",
        "reason": "The Magnitude Response of an LTI system is the magnitude of H(ω)."
    },
    {
        "lecture": 5,
        "id": 257,
        "question": "What does a bandpass filter do?",
        "answers": {
            "a": "Passes low frequencies only",
            "b": "Passes high frequencies only",
            "c": "Passes frequencies within a certain range"
        },
        "correct": "c",
        "reason": "A bandpass filter passes frequencies within a certain range."
    },
    {
        "lecture": 5,
        "id": 258,
        "question": "What is the condition for a signal to be considered bandlimited?",
        "answers": {
            "a": "It contains no frequencies",
            "b": "Its Fourier Transform is zero for frequencies above a certain value",
            "c": "It has infinite duration in time"
        },
        "correct": "b",
        "reason": "A signal is bandlimited if its Fourier Transform is zero for frequencies above a certain value."
    },
    {
        "lecture": 5,
        "id": 259,
        "question": "What is the result of multiplying a time-domain signal by a complex exponential?",
        "answers": {
            "a": "Time-domain shifting",
            "b": "Frequency-domain shifting",
            "c": "Scaling"
        },
        "correct": "b",
        "reason": "Multiplying a time-domain signal by a complex exponential results in frequency-domain shifting."
    },
    {
        "lecture": 5,
        "id": 260,
        "question": "What is the Fourier Transform of a rectangular pulse?",
        "answers": {
            "a": "A sinc function",
            "b": "A delta function",
            "c": "A cosine function"
        },
        "correct": "a",
        "reason": "The Fourier Transform of a rectangular pulse is a sinc function."
    },
    {
        "lecture": 5,
        "id": 261,
        "question": "What property of the Fourier Transform makes it useful for analyzing LTI systems?",
        "answers": {
            "a": "It converts differentiation into multiplication",
            "b": "It converts convolution into multiplication",
            "c": "It preserves the energy of the signal"
        },
        "correct": "b",
        "reason": "The Fourier Transform converts convolution into multiplication, making it useful for analyzing LTI systems."
    },
    {
        "lecture": 5,
        "id": 262,
        "question": "What is the significance of the Nyquist Theorem?",
        "answers": {
            "a": "It determines the minimum sampling rate to avoid aliasing",
            "b": "It provides the Fourier Transform of a signal",
            "c": "It defines the bandwidth of a signal"
        },
        "correct": "a",
        "reason": "The Nyquist Theorem determines the minimum sampling rate to avoid aliasing."
    },
    {
        "lecture": 5,
        "id": 263,
        "question": "What does the term 'frequency response' of a system refer to?",
        "answers": {
            "a": "The response of the system in the time domain",
            "b": "The response of the system in the frequency domain",
            "c": "The energy distribution of the system"
        },
        "correct": "b",
        "reason": "The frequency response of a system refers to the response of the system in the frequency domain."
    },
    {
        "lecture": 5,
        "id": 264,
        "question": "What is the Fourier Transform of the sign function sgn(t)?",
        "answers": {
            "a": "1",
            "b": "δ(ω)",
            "c": "2/(jω)"
        },
        "correct": "c",
        "reason": "The Fourier Transform of the sign function sgn(t) is 2/(jω)."
    },
    {
        "lecture": 5,
        "id": 265,
        "question": "What does Parseval's theorem state about energy?",
        "answers": {
            "a": "Energy in time domain equals energy in frequency domain up to a factor",
            "b": "Energy in time domain is always greater than in frequency domain",
            "c": "Energy in frequency domain is always greater than in time domain"
        },
        "correct": "a",
        "reason": "Parseval's theorem states that energy in the time domain equals energy in the frequency domain up to a factor."
    },
    {
        "lecture": 5,
        "id": 266,
        "question": "What is the effect of time-domain differentiation on the Fourier Transform?",
        "answers": {
            "a": "It scales the transform by 1/jω",
            "b": "It scales the transform by jω",
            "c": "It adds a phase shift to the transform"
        },
        "correct": "b",
        "reason": "Time-domain differentiation scales the Fourier Transform by jω."
    },
    {
        "lecture": 5,
        "id": 267,
        "question": "What is an ideal lowpass filter's frequency response?",
        "answers": {
            "a": "1 for |ω| > ωc, 0 otherwise",
            "b": "1 for |ω| < ωc, 0 otherwise",
            "c": "1 for all frequencies"
        },
        "correct": "b",
        "reason": "An ideal lowpass filter has a frequency response of 1 for |ω| < ωc, 0 otherwise."
    },
    {
        "lecture": 5,
        "id": 268,
        "question": "What is the Fourier Transform pair of a rect(t/T)?",
        "answers": {
            "a": "sinc(Tω/2)",
            "b": "δ(t)",
            "c": "1"
        },
        "correct": "a",
        "reason": "The Fourier Transform pair of rect(t/T) is sinc(Tω/2)."
    },
    {
        "lecture": 5,
        "id": 269,
        "question": "What does a capacitor do in a circuit?",
        "answers": {
            "a": "Stores electric charge",
            "b": "Opposes the flow of current",
            "c": "Converts electric current into a magnetic field"
        },
        "correct": "a",
        "reason": "A capacitor stores electric charge."
    },
    {
        "lecture": 5,
        "id": 270,
        "question": "What is the relationship between voltage and current in an inductor in the frequency domain?",
        "answers": {
            "a": "V(ω) = jωLI(ω)",
            "b": "V(ω) = RI(ω)",
            "c": "V(ω) = 1/(jωCI(ω))"
        },
        "correct": "a",
        "reason": "The relationship between voltage and current in an inductor in the frequency domain is V(ω) = jωLI(ω)."
    },
    {
        "lecture": 5,
        "id": 271,
        "question": "What is the function of an ideal highpass filter?",
        "answers": {
            "a": "To eliminate all frequencies above a certain cutoff frequency",
            "b": "To eliminate all frequencies below a certain cutoff frequency",
            "c": "To pass all frequencies equally"
        },
        "correct": "b",
        "reason": "An ideal highpass filter eliminates all frequencies below a certain cutoff frequency while passing higher frequencies."
    },
    {
        "lecture": 5,
        "id": 272,
        "question": "What does the Fourier Transform of a rectangular pulse in the time domain produce?",
        "answers": {
            "a": "A sinc function in the frequency domain",
            "b": "A delta function",
            "c": "A cosine function"
        },
        "correct": "a",
        "reason": "The Fourier Transform of a rectangular pulse produces a sinc function in the frequency domain."
    },
    {
        "lecture": 5,
        "id": 273,
        "question": "What is the primary reason for using amplitude modulation (AM) in communication systems?",
        "answers": {
            "a": "To reduce the bandwidth of the signal",
            "b": "To change the frequency range of the signal for transmission",
            "c": "To increase the power of the signal"
        },
        "correct": "b",
        "reason": "Amplitude modulation (AM) is used to change the frequency range of the signal for more practical transmission."
    },
    {
        "lecture": 5,
        "id": 274,
        "question": "What is the phenomenon called when different shifted copies of the original signal's spectrum overlap?",
        "answers": {
            "a": "Aliasing",
            "b": "Convolution",
            "c": "Interpolation"
        },
        "correct": "a",
        "reason": "Aliasing occurs when different shifted copies of the original signal's spectrum overlap."
    },
    {
        "lecture": 5,
        "id": 275,
        "question": "What is the inverse process of sampling called?",
        "answers": {
            "a": "Modulation",
            "b": "Demodulation",
            "c": "Interpolation"
        },
        "correct": "c",
        "reason": "Interpolation is the process of reconstructing a continuous-time signal from its discrete-time samples."
    },
    {
        "lecture": 5,
        "id": 276,
        "question": "What is the result of applying a Fourier Transform to a real and even signal?",
        "answers": {
            "a": "An imaginary and odd function",
            "b": "A real and even function",
            "c": "A complex and odd function"
        },
        "correct": "b",
        "reason": "The Fourier Transform of a real and even signal is also a real and even function."
    },
    {
        "lecture": 5,
        "id": 277,
        "question": "What is a key advantage of using the Fourier Transform in analyzing LTI systems?",
        "answers": {
            "a": "It simplifies the time-domain analysis",
            "b": "It converts convolution in time domain to multiplication in frequency domain",
            "c": "It provides time-domain characteristics directly"
        },
        "correct": "b",
        "reason": "A key advantage of the Fourier Transform is that it converts convolution in the time domain to multiplication in the frequency domain."
    },
    {
        "lecture": 5,
        "id": 278,
        "question": "What does the term 'finite-energy signal' refer to?",
        "answers": {
            "a": "A signal with bounded amplitude",
            "b": "A signal whose energy is finite",
            "c": "A periodic signal"
        },
        "correct": "b",
        "reason": "A finite-energy signal is one whose total energy, given by the integral of the square of its amplitude, is finite."
    },
    {
        "lecture": 5,
        "id": 279,
        "question": "What is the primary purpose of an equalizer in communication systems?",
        "answers": {
            "a": "To amplify the signal",
            "b": "To change the frequency response of a system",
            "c": "To filter out noise"
        },
        "correct": "b",
        "reason": "The primary purpose of an equalizer is to change the frequency response of a system to a more desirable form."
    },
    {
        "lecture": 5,
        "id": 280,
        "question": "What does the sinc function represent in signal processing?",
        "answers": {
            "a": "The time-domain representation of a rectangular pulse",
            "b": "The frequency-domain representation of a rectangular pulse",
            "c": "The impulse response of a lowpass filter"
        },
        "correct": "b",
        "reason": "The sinc function represents the frequency-domain representation of a rectangular pulse."
    },
    {
        "lecture": 5,
        "id": 281,
        "question": "What is the relationship between a signal's bandwidth and its duration in time?",
        "answers": {
            "a": "A signal cannot be both time-limited and bandlimited",
            "b": "A signal's bandwidth is always greater than its duration",
            "c": "A signal's duration is inversely proportional to its bandwidth"
        },
        "correct": "a",
        "reason": "According to the time/frequency scaling property of the Fourier Transform, a signal cannot be both time-limited and bandlimited."
    },
    {
        "lecture": 5,
        "id": 282,
        "question": "What does the Fourier Transform of a unit step function \( u(t) \) yield?",
        "answers": {
            "a": "1",
            "b": "\( \frac{1}{j\omega} + \pi\delta(\omega) \)",
            "c": "\(\delta(t)\)"
        },
        "correct": "b",
        "reason": "The Fourier Transform of a unit step function \( u(t) \) is \( \frac{1}{j\omega} + \pi\delta(\omega) \)."
    },
    {
        "lecture": 5,
        "id": 283,
        "question": "What is the significance of Parseval's theorem in signal processing?",
        "answers": {
            "a": "It relates time-domain energy to frequency-domain energy",
            "b": "It states that the Fourier Transform of a periodic signal is also periodic",
            "c": "It provides a method for filtering signals"
        },
        "correct": "a",
        "reason": "Parseval's theorem relates the energy of a signal in the time domain to the energy in the frequency domain."
    },
    {
        "lecture": 5,
        "id": 284,
        "question": "What does the duality property of the Fourier Transform imply?",
        "answers": {
            "a": "The Fourier Transform of a time-domain signal is the same as the original signal",
            "b": "The Fourier Transform of a function can be used to find the inverse transform",
            "c": "The roles of time and frequency domains can be interchanged"
        },
        "correct": "c",
        "reason": "The duality property implies that the roles of time and frequency domains can be interchanged in the Fourier Transform."
    },
    {
        "lecture": 5,
        "id": 285,
        "question": "What does the term 'frequency response' refer to in the context of LTI systems?",
        "answers": {
            "a": "The system's output in the time domain",
            "b": "The system's output in the frequency domain",
            "c": "The system's input in the frequency domain"
        },
        "correct": "b",
        "reason": "The frequency response refers to the system's behavior or output in the frequency domain."
    },
    {
        "lecture": 5,
        "id": 286,
        "question": "What is the primary difference between DSB-SC AM and SSB-SC AM?",
        "answers": {
            "a": "DSB-SC AM transmits both sidebands, while SSB-SC AM transmits only one",
            "b": "DSB-SC AM requires more bandwidth than SSB-SC AM",
            "c": "SSB-SC AM requires more power than DSB-SC AM"
        },
        "correct": "a",
        "reason": "The primary difference is that DSB-SC AM transmits both sidebands while SSB-SC AM transmits only one sideband."
    },
    {
        "lecture": 5,
        "id": 287,
        "question": "What is an example of a finite-energy signal?",
        "answers": {
            "a": "A constant signal",
            "b": "A rectangular pulse",
            "c": "A sinusoidal signal"
        },
        "correct": "b",
        "reason": "A rectangular pulse is an example of a finite-energy signal as its total energy is finite."
    }
];



const lectureSummaries = {
    1 : `Signals
    Definition: A signal is a function that conveys information about a physical phenomenon.
    Independent Variable: Variables such as time in f(t) are independent variables.
    Dependent Variable: The value of the function is the dependent variable.
    Examples: Voltage/current in circuits, position/velocity in mechanics, flow rate in processes, digital images/videos/audio, stock market index.
    Classification of Signals
    Dimensionality:
    One-dimensional (1D): Single independent variable (e.g., audio).
    Multi-dimensional (MD): Multiple independent variables (e.g., image).
    Type of Independent Variable:
    Continuous Time (CT): Continuous variables (e.g., voltage waveform).
    Discrete Time (DT): Discrete variables (e.g., stock market index).
    Type of Dependent Variable:
    Continuous Valued: Continuous values (e.g., voltage waveform).
    Discrete Valued: Discrete values (e.g., digital image).
    Analog Signals: Continuous-valued CT signals.
    Digital Signals: Discrete-valued DT signals.
    Systems
    Definition: An entity that processes input signals to produce output signals.
    Input and Output:
    Single Input (SI) vs. Multiple Input (MI): Number of inputs.
    Single Output (SO) vs. Multiple Output (MO): Number of outputs.
    Signal Types:
    Systems are classified by the types of signals they process (e.g., CT systems process CT signals).
    Signal Processing Systems
    Converters:
    Continuous-to-Discrete (C/D) Converter: Processes continuous-time signals with a discrete-time system.
    Discrete-to-Continuous (D/C) Converter: Processes discrete-time signals with a continuous-time system.
    Communication Systems
    General Structure:
    Transmitted Signal
    Received Signal
    Feedback Control Systems
    General Structure:
    Reference Input
    Error Signal
    Output Signal
    Feedback Signal
    Importance of Mathematical Framework
    Ensures systems meet specifications.
    Prevents catastrophic failures (e.g., Tacoma Narrows Bridge collapse).
    Functions vs. Sequences
    CT Signal: Called a function.
    DT Signal: Called a sequence.
    Notation: Be careful with function vs. function value notation.
    Even and Odd Signals
    Even Signal: Symmetric about the origin.
    Condition: 
    𝑥
    (
    𝑡
    )
    =
    𝑥
    (
    −
    𝑡
    )
    x(t)=x(−t) for all 
    𝑡
    t.
    Odd Signal: Antisymmetric about the origin.
    Condition: 
    𝑥
    (
    𝑡
    )
    =
    −
    𝑥
    (
    −
    𝑡
    )
    x(t)=−x(−t) for all 
    𝑡
    t.
    Periodic Signals
    Periodic with Period 
    𝑇
    T:
    Condition: 
    𝑥
    (
    𝑡
    )
    =
    𝑥
    (
    𝑡
    +
    𝑇
    )
    x(t)=x(t+T) for all 
    𝑡
    t.
    Frequency and Angular Frequency:
    Frequency: 
    𝑓
    =
    1
    𝑇
    f= 
    T
    1
    ​
     
    Angular Frequency: 
    𝜔
    =
    2
    𝜋
    𝑓
    ω=2πf
    Aperiodic Signals: Signals that are not periodic.
    Fundamental Period: The smallest period with which a signal is periodic.`,
    2: `
    Time Shifting (Translation)
Definition: Shifts the input signal 
𝑥
(
𝑡
)
x(t) to the output signal 
𝑦
(
𝑡
)
=
𝑥
(
𝑡
−
𝑏
)
y(t)=x(t−b), where 
𝑏
b is a real number.
Effect:
If 
𝑏
>
0
b>0, the signal shifts right (delay).
If 
𝑏
<
0
b<0, the signal shifts left (advance).
Time Reversal (Reflection)
Definition: Reverses the input signal 
𝑥
(
𝑡
)
x(t) to the output signal 
𝑦
(
𝑡
)
=
𝑥
(
−
𝑡
)
y(t)=x(−t).
Effect: The signal reflects about the vertical axis 
𝑡
=
0
t=0.
Time Compression/Expansion (Dilation)
Definition: Changes the input signal 
𝑥
(
𝑡
)
x(t) to the output signal 
𝑦
(
𝑡
)
=
𝑥
(
𝑎
𝑡
)
y(t)=x(at), where 
𝑎
a is a positive real number.
Effect:
If 
𝑎
>
1
a>1, the signal compresses along the time axis.
If 
𝑎
<
1
a<1, the signal expands along the time axis.
Time Scaling
Definition: General form of time compression/expansion and reversal, 
𝑦
(
𝑡
)
=
𝑥
(
𝑎
𝑡
)
y(t)=x(at) where 
𝑎
a is nonzero.
Effect:
If 
∣
𝑎
∣
>
1
∣a∣>1, the signal compresses.
If 
∣
𝑎
∣
<
1
∣a∣<1, the signal expands.
If 
𝑎
<
0
a<0, the signal also reverses in time.
Combined Time Scaling and Time Shifting
Definition: Combines both transformations, 
𝑦
(
𝑡
)
=
𝑥
(
𝑎
𝑡
−
𝑏
)
y(t)=x(at−b).
Order of Operations: The result depends on the order of applying scaling and shifting.
Amplitude Scaling
Definition: Scales the input signal 
𝑥
(
𝑡
)
x(t) to 
𝑦
(
𝑡
)
=
𝑎
𝑥
(
𝑡
)
y(t)=ax(t), where 
𝑎
a is a real number.
Effect: Changes the amplitude of the signal.
Amplitude Shifting
Definition: Shifts the input signal 
𝑥
(
𝑡
)
x(t) to 
𝑦
(
𝑡
)
=
𝑥
(
𝑡
)
+
𝑏
y(t)=x(t)+b, where 
𝑏
b is a real number.
Effect: Adds a vertical displacement to the signal.
Combined Amplitude Scaling and Shifting
Definition: Combines amplitude scaling and shifting, 
𝑦
(
𝑡
)
=
𝑎
𝑥
(
𝑡
)
+
𝑏
y(t)=ax(t)+b.
Symmetry and Addition/Multiplication
Properties:
The sum of two even functions is even.
The sum of two odd functions is odd.
The product of two even functions is even.
The product of two odd functions is even.
The product of an even function and an odd function is odd.
Decomposition of a Signal into Even and Odd Parts
Formula: 
𝑥
(
𝑡
)
=
𝑥
𝑒
(
𝑡
)
+
𝑥
𝑜
(
𝑡
)
x(t)=x 
e
​
 (t)+x 
o
​
 (t), where 
𝑥
𝑒
(
𝑡
)
x 
e
​
 (t) is the even part and 
𝑥
𝑜
(
𝑡
)
x 
o
​
 (t) is the odd part.
Calculation:
Even part: 
𝑥
𝑒
(
𝑡
)
=
1
2
[
𝑥
(
𝑡
)
+
𝑥
(
−
𝑡
)
]
x 
e
​
 (t)= 
2
1
​
 [x(t)+x(−t)].
Odd part: 
𝑥
𝑜
(
𝑡
)
=
1
2
[
𝑥
(
𝑡
)
−
𝑥
(
−
𝑡
)
]
x 
o
​
 (t)= 
2
1
​
 [x(t)−x(−t)].
Periodic Functions
Sum of Periodic Functions: The sum 
𝑦
(
𝑡
)
=
𝑥
1
(
𝑡
)
+
𝑥
2
(
𝑡
)
y(t)=x 
1
​
 (t)+x 
2
​
 (t) is periodic if the ratio of their periods is rational.
Signal Classification
Right-Sided Signals: Nonzero for 
𝑡
≥
𝑡
0
t≥t 
0
​
 .
Left-Sided Signals: Nonzero for 
𝑡
≤
𝑡
0
t≤t 
0
​
 .
Finite Duration Signals: Nonzero within a finite time interval.
Bounded Signals: Finite amplitude for all 
𝑡
t.
Signal Energy and Power
Energy: 
𝐸
=
∫
−
∞
∞
∣
𝑥
(
𝑡
)
∣
2
𝑑
𝑡
E=∫ 
−∞
∞
​
 ∣x(t)∣ 
2
 dt.
Power: 
𝑃
=
lim
⁡
𝑇
→
∞
1
2
𝑇
∫
−
𝑇
𝑇
∣
𝑥
(
𝑡
)
∣
2
𝑑
𝑡
P=lim 
T→∞
​
  
2T
1
​
 ∫ 
−T
T
​
 ∣x(t)∣ 
2
 dt.
Real Sinusoids and Exponentials
Real Sinusoid: 
𝑥
(
𝑡
)
=
𝐴
cos
⁡
(
𝜔
𝑡
+
𝜙
)
x(t)=Acos(ωt+ϕ), periodic with period 
𝑇
=
2
𝜋
∣
𝜔
∣
T= 
∣ω∣
2π
​
 .
Complex Exponential: 
𝑥
(
𝑡
)
=
𝐴
𝑒
(
𝛼
+
𝑗
𝜔
)
𝑡
x(t)=Ae 
(α+jω)t
 , can exhibit various behaviors (growth, decay, oscillation).
Unit-Step, Signum, Rectangular, and Triangular Functions
Unit-Step Function: 
𝑢
(
𝑡
)
=
{
1
𝑡
≥
0
0
𝑡
<
0
u(t)={ 
1
0
​
  
t≥0
t<0
​
 
Signum Function: 
sgn
(
𝑡
)
=
{
1
𝑡
>
0
0
𝑡
=
0
−
1
𝑡
<
0
sgn(t)= 
⎩
⎨
⎧
​
  
1
0
−1
​
  
t>0
t=0
t<0
​
 
Rectangular Function: 
rect
(
𝑡
)
=
{
1
∣
𝑡
∣
≤
1
2
0
otherwise
rect(t)={ 
1
0
​
  
∣t∣≤ 
2
1
​
 
otherwise
​
 
Triangular Function: 
tri
(
𝑡
)
=
{
1
−
∣
𝑡
∣
∣
𝑡
∣
≤
1
0
otherwise
tri(t)={ 
1−∣t∣
0
​
  
∣t∣≤1
otherwise
​
 
Unit-Impulse Function
Definition: 
𝛿
(
𝑡
)
δ(t) with properties 
𝛿
(
𝑡
)
=
0
δ(t)=0 for 
𝑡
≠
0
t

=0 and 
∫
−
∞
∞
𝛿
(
𝑡
)
𝑑
𝑡
=
1
∫ 
−∞
∞
​
 δ(t)dt=1.
System Properties
Memory: A system has memory if its output depends on past or future input values.
Causality: A system is causal if its output at any time depends only on present and past inputs.
Invertibility: A system is invertible if there exists an inverse system that can recover the input from the output.
BIBO Stability: A system is BIBO stable if every bounded input leads to a bounded output.
Time Invariance: A system is time-invariant if a time shift in the input results in an identical time shift in the output.
Linearity: A system is linear if it satisfies both additivity and homogeneity.
`,
    3: `Why Linear Time-Invariant (LTI) Systems?

    LTI systems are crucial in engineering due to their ease of analysis with powerful mathematical tools.
    Non-LTI systems can often be approximated by LTI models, making LTI systems universally important.
    CT Convolution
    
    Convolution (denoted as x * h) is a fundamental operation in system theory, particularly for LTI systems.
    Convolution of x and h at time t is a weighted average of x with weights given by a time-reversed and shifted h.
    Practical Convolution Computation
    
    Plot x(t) and h(t-τ).
    Shift h(t-τ) over t, calculating the weighted average.
    Determine the expression for the result in various intervals and combine them for the full convolution expression.
    Properties of Convolution
    
    Commutative: 
    𝑥
    ∗
    ℎ
    =
    ℎ
    ∗
    𝑥
    x∗h=h∗x
    Associative: 
    (
    𝑥
    ∗
    ℎ
    )
    ∗
    𝑔
    =
    𝑥
    ∗
    (
    ℎ
    ∗
    𝑔
    )
    (x∗h)∗g=x∗(h∗g)
    Distributive: 
    𝑥
    ∗
    (
    ℎ
    +
    𝑔
    )
    =
    𝑥
    ∗
    ℎ
    +
    𝑥
    ∗
    𝑔
    x∗(h+g)=x∗h+x∗g
    Representation of Signals Using Impulses
    
    Any function x can be represented using impulse functions, and the impulse function δ is the convolutional identity: 
    𝑥
    ∗
    𝛿
    =
    𝑥
    x∗δ=x.
    Periodic Convolution
    
    Periodic convolution is defined for periodic functions and differs from regular convolution. It integrates over one period.
    Impulse Response
    
    The response of a system to an impulse input δ is called the impulse response h.
    An LTI system's output y to any input x can be determined by convolving x with the impulse response: 
    𝑦
    =
    𝑥
    ∗
    ℎ
    y=x∗h.
    Step Response
    
    The response to a step input u is called the step response s.
    The impulse response can be derived from the step response by differentiation: 
    ℎ
    (
    𝑡
    )
    =
    𝑑
    𝑑
    𝑡
    𝑠
    (
    𝑡
    )
    h(t)= 
    dt
    d
    ​
     s(t).
    Block Diagram Representation of LTI Systems
    
    LTI systems can be represented using block diagrams, with labels for impulse response.
    Interconnection of LTI Systems
    
    Series: Impulse response 
    ℎ
    =
    ℎ
    1
    ∗
    ℎ
    2
    h=h 
    1
    ​
     ∗h 
    2
    ​
     
    Parallel: Impulse response 
    ℎ
    =
    ℎ
    1
    +
    ℎ
    2
    h=h 
    1
    ​
     +h 
    2
    ​
     
    Memory
    
    An LTI system is memoryless if 
    ℎ
    (
    𝑡
    )
    =
    0
    h(t)=0 for all 
    𝑡
    ≠
    0
    t
    
    =0. It behaves as an ideal amplifier 
    𝑦
    =
    𝐾
    𝑥
    y=Kx.
    Causality
    
    An LTI system is causal if 
    ℎ
    (
    𝑡
    )
    =
    0
    h(t)=0 for all 
    𝑡
    <
    0
    t<0.
    Invertibility
    
    An LTI system is invertible if there exists an impulse response 
    ℎ
    −
    1
    h 
    −1
      such that 
    ℎ
    ∗
    ℎ
    −
    1
    =
    𝛿
    h∗h 
    −1
     =δ.
    BIBO Stability
    
    An LTI system is BIBO (Bounded Input Bounded Output) stable if the impulse response is absolutely integrable: 
    ∫
    ∣
    ℎ
    (
    𝑡
    )
    ∣
    𝑑
    𝑡
    <
    ∞
    ∫∣h(t)∣dt<∞.
    Eigenfunctions of Systems
    
    An input 
    𝑥
    x is an eigenfunction if the output 
    𝑦
    y is a scaled version of 
    𝑥
    x: 
    𝑦
    =
    𝐴
    𝑥
    y=Ax, where 
    𝐴
    A is a constant.
    Eigenfunctions of LTI Systems
    
    Complex exponentials 
    𝑒
    𝑠
    𝑡
    e 
    st
      are eigenfunctions of LTI systems with eigenvalue 
    𝐻
    (
    𝑠
    )
    H(s), where 
    𝐻
    (
    𝑠
    )
    =
    ∫
    ℎ
    (
    𝑡
    )
    𝑒
    −
    𝑠
    𝑡
    𝑑
    𝑡
    H(s)=∫h(t)e 
    −st
     dt.
    Representations of Signals Using Eigenfunctions
    
    If an input 
    𝑥
    x can be expressed as a linear combination of complex exponentials, the output 
    𝑦
    y will also be a linear combination of the same exponentials scaled by 
    𝐻
    (
    𝑠
    )
    H(s).
    This summary provides a clear understanding of the key concepts and properties of LTI systems, convolution, impulse response, and related topics, essential for your test preparation.
    `,
    4: `
    Introduction
Fourier Series: Represents periodic signals as a combination of complex sinusoids.
Complex Sinusoids: Preferred for their continuous, differentiable nature and ease of integration and differentiation.
LTI Systems: Complex sinusoids are eigenfunctions of Linear Time-Invariant (LTI) systems.
Harmonically-Related Complex Sinusoids
Harmonically Related: A set of sinusoids is harmonically related if their fundamental frequencies are integer multiples of a base frequency.
Fundamental Frequency: The frequency of a sinusoid is given by 
𝑘
𝜔
0
kω 
0
​
 , where 
𝜔
0
ω 
0
​
  is the base frequency.
Continuous-Time (CT) Fourier Series
Representation: A periodic complex signal can be represented as:
𝑥
(
𝑡
)
=
∑
𝑘
=
−
∞
∞
𝑐
𝑘
𝑒
𝑗
𝑘
𝜔
0
𝑡
x(t)= 
k=−∞
∑
∞
​
 c 
k
​
 e 
jkω 
0
​
 t
 
where 
𝑐
𝑘
c 
k
​
  are the Fourier series coefficients.
Coefficients: Given by the Fourier series analysis equation:
𝑐
𝑘
=
1
𝑇
∫
𝑇
𝑥
(
𝑡
)
𝑒
−
𝑗
𝑘
𝜔
0
𝑡
 
𝑑
𝑡
c 
k
​
 = 
T
1
​
 ∫ 
T
​
 x(t)e 
−jkω 
0
​
 t
 dt
Trigonometric Forms of a Fourier Series
Combined Trigonometric Form:
𝑥
(
𝑡
)
=
𝑐
0
+
2
∑
𝑘
=
1
∞
∣
𝑐
𝑘
∣
cos
⁡
(
𝑘
𝜔
0
𝑡
+
𝜃
𝑘
)
x(t)=c 
0
​
 +2 
k=1
∑
∞
​
 ∣c 
k
​
 ∣cos(kω 
0
​
 t+θ 
k
​
 )
where 
𝜃
𝑘
=
arg
⁡
(
𝑐
𝑘
)
θ 
k
​
 =arg(c 
k
​
 ).
Trigonometric Form:
𝑥
(
𝑡
)
=
𝑐
0
+
∑
𝑘
=
1
∞
[
𝑎
𝑘
cos
⁡
(
𝑘
𝜔
0
𝑡
)
+
𝑏
𝑘
sin
⁡
(
𝑘
𝜔
0
𝑡
)
]
x(t)=c 
0
​
 + 
k=1
∑
∞
​
 [a 
k
​
 cos(kω 
0
​
 t)+b 
k
​
 sin(kω 
0
​
 t)]
where 
𝑎
𝑘
=
2
ℜ
(
𝑐
𝑘
)
a 
k
​
 =2ℜ(c 
k
​
 ) and 
𝑏
𝑘
=
−
2
ℑ
(
𝑐
𝑘
)
b 
k
​
 =−2ℑ(c 
k
​
 ).
Convergence of Fourier Series
Pointwise Convergence: The series converges at every point to the signal 
𝑥
(
𝑡
)
x(t).
Mean-Squared Error (MSE) Convergence: The energy of the error between the signal and its approximation goes to zero.
Uniform Convergence: Convergence rate is the same everywhere in the signal.
Special Cases of Convergence
Continuous Signals: Uniform convergence if Fourier coefficients are absolutely summable.
Finite-Energy Signals: MSE convergence if the signal has finite energy over one period.
Dirichlet Conditions: Ensure pointwise convergence except at discontinuities.
Gibbs Phenomenon
Discontinuities: Fourier series converge slowly near discontinuities, showing ripples with constant peak amplitude.
Properties of Fourier Series
Linearity: Combination of signals results in the same combination of their Fourier coefficients.
Time Shifting: Shifts in time modify the phase of the coefficients.
Time Reversal: Reverses the coefficients.
Conjugation: Conjugating a signal reverses and conjugates the coefficients.
Symmetry: Even signals have even coefficients, odd signals have odd coefficients.
Real Signals: Real signals have conjugate symmetric coefficients.
Frequency Domain Perspective
Frequency Spectrum: The distribution of signal information across different frequencies.
Magnitude Spectrum: 
∣
𝑐
𝑘
∣
∣c 
k
​
 ∣
Phase Spectrum: 
arg
⁡
(
𝑐
𝑘
)
arg(c 
k
​
 )
Fourier Series and LTI Systems
Eigenfunctions: Complex sinusoids maintain their form when passed through LTI systems.
Filtering: Modifying the frequency spectrum of a signal, e.g., lowpass, highpass, and bandpass filters.
Types of Filters
Lowpass Filter: Passes low frequencies, attenuates high frequencies.
Highpass Filter: Passes high frequencies, attenuates low frequencies.
Bandpass Filter: Passes frequencies within a certain range, attenuates others.
`,
    5: `Fourier Transform Overview
Motivation for the Fourier Transform
Fourier Series: Useful for representing periodic signals.
Limitation: Cannot handle non-periodic signals.
Solution: Fourier Transform, a more general tool, can represent both periodic and aperiodic signals. It is derived from the Fourier series.
Development of the Fourier Transform
Fourier Series: Only for periodic signals.
Generalization: Viewing aperiodic signals as limiting cases of periodic signals with an infinite period leads to the Fourier Transform.
Continuous-Time Fourier Transform (CTFT)
Forward Fourier Transform: 
𝑋
(
𝜔
)
=
∫
−
∞
∞
𝑥
(
𝑡
)
𝑒
−
𝑗
𝜔
𝑡
𝑑
𝑡
X(ω)=∫ 
−∞
∞
​
 x(t)e 
−jωt
 dt
Inverse Fourier Transform: 
𝑥
(
𝑡
)
=
1
2
𝜋
∫
−
∞
∞
𝑋
(
𝜔
)
𝑒
𝑗
𝜔
𝑡
𝑑
𝜔
x(t)= 
2π
1
​
 ∫ 
−∞
∞
​
 X(ω)e 
jωt
 dω
Notation: 
𝑥
(
𝑡
)
↔
𝑋
(
𝜔
)
x(t)↔X(ω)
Convergence of the Fourier Transform
Conditions: The Fourier Transform converges under certain conditions:
Continuous Case: If 
𝑥
(
𝑡
)
x(t) is continuous and absolutely integrable, its Fourier Transform converges.
Finite-Energy Case: If 
𝑥
(
𝑡
)
x(t) has finite energy, its Fourier Transform representation converges in the mean square error (MSE) sense.
Dirichlet Conditions: If 
𝑥
(
𝑡
)
x(t) is absolutely integrable, has finite maxima and minima, and finite discontinuities, the Fourier Transform converges everywhere except at discontinuities.
Properties of the Fourier Transform
Linearity: 
𝑎
1
𝑥
1
(
𝑡
)
+
𝑎
2
𝑥
2
(
𝑡
)
↔
𝑎
1
𝑋
1
(
𝜔
)
+
𝑎
2
𝑋
2
(
𝜔
)
a 
1
​
 x 
1
​
 (t)+a 
2
​
 x 
2
​
 (t)↔a 
1
​
 X 
1
​
 (ω)+a 
2
​
 X 
2
​
 (ω)
Time-Domain Shifting: 
𝑥
(
𝑡
−
𝑡
0
)
↔
𝑒
−
𝑗
𝜔
𝑡
0
𝑋
(
𝜔
)
x(t−t 
0
​
 )↔e 
−jωt 
0
​
 
 X(ω)
Frequency-Domain Shifting: 
𝑒
𝑗
𝜔
0
𝑡
𝑥
(
𝑡
)
↔
𝑋
(
𝜔
−
𝜔
0
)
e 
jω 
0
​
 t
 x(t)↔X(ω−ω 
0
​
 )
Scaling: 
𝑥
(
𝑎
𝑡
)
↔
1
∣
𝑎
∣
𝑋
(
𝜔
𝑎
)
x(at)↔ 
∣a∣
1
​
 X( 
a
ω
​
 )
Conjugation: 
𝑥
∗
(
𝑡
)
↔
𝑋
∗
(
−
𝜔
)
x 
∗
 (t)↔X 
∗
 (−ω)
Duality: 
𝑥
(
𝑡
)
↔
2
𝜋
𝑋
(
−
𝑡
)
x(t)↔2πX(−t)
Convolution: 
𝑥
1
(
𝑡
)
∗
𝑥
2
(
𝑡
)
↔
𝑋
1
(
𝜔
)
𝑋
2
(
𝜔
)
x 
1
​
 (t)∗x 
2
​
 (t)↔X 
1
​
 (ω)X 
2
​
 (ω)
Multiplication: 
𝑥
1
(
𝑡
)
𝑥
2
(
𝑡
)
↔
1
2
𝜋
(
𝑋
1
∗
𝑋
2
)
(
𝜔
)
x 
1
​
 (t)x 
2
​
 (t)↔ 
2π
1
​
 (X 
1
​
 ∗X 
2
​
 )(ω)
Differentiation in Time: 
𝑑
𝑑
𝑡
𝑥
(
𝑡
)
↔
𝑗
𝜔
𝑋
(
𝜔
)
dt
d
​
 x(t)↔jωX(ω)
Integration in Time: 
∫
−
∞
𝑡
𝑥
(
𝜏
)
𝑑
𝜏
↔
𝑋
(
𝜔
)
𝑗
𝜔
+
𝜋
𝑋
(
0
)
𝛿
(
𝜔
)
∫ 
−∞
t
​
 x(τ)dτ↔ 
jω
X(ω)
​
 +πX(0)δ(ω)
Parseval's Relation: 
∫
−
∞
∞
∣
𝑥
(
𝑡
)
∣
2
𝑑
𝑡
=
1
2
𝜋
∫
−
∞
∞
∣
𝑋
(
𝜔
)
∣
2
𝑑
𝜔
∫ 
−∞
∞
​
 ∣x(t)∣ 
2
 dt= 
2π
1
​
 ∫ 
−∞
∞
​
 ∣X(ω)∣ 
2
 dω
Fourier Transform Pairs
Examples:
𝛿
(
𝑡
)
↔
1
δ(t)↔1
𝑢
(
𝑡
)
↔
1
𝑗
𝜔
+
𝜋
𝛿
(
𝜔
)
u(t)↔ 
jω
1
​
 +πδ(ω)
𝑒
𝑗
𝜔
0
𝑡
↔
2
𝜋
𝛿
(
𝜔
−
𝜔
0
)
e 
jω 
0
​
 t
 ↔2πδ(ω−ω 
0
​
 )
cos
⁡
(
𝜔
0
𝑡
)
↔
𝜋
[
𝛿
(
𝜔
−
𝜔
0
)
+
𝛿
(
𝜔
+
𝜔
0
)
]
cos(ω 
0
​
 t)↔π[δ(ω−ω 
0
​
 )+δ(ω+ω 
0
​
 )]
Frequency Spectra of Signals
Frequency Spectrum: Representation of signal information in the frequency domain.
Magnitude Spectrum: 
∣
𝑋
(
𝜔
)
∣
∣X(ω)∣ shows how much of each frequency is present.
Phase Spectrum: 
arg
⁡
(
𝑋
(
𝜔
)
)
arg(X(ω)) shows the phase shift at each frequency.
Real Signals: For a real signal 
𝑥
(
𝑡
)
x(t), 
𝑋
(
𝜔
)
=
𝑋
∗
(
−
𝜔
)
X(ω)=X 
∗
 (−ω), implying even magnitude and odd phase spectra.
Fourier Transform of Periodic Signals
Periodicity in Frequency: The Fourier transform of a periodic signal results in discrete frequency components (Fourier series coefficients).
Bandwidth
Bandlimited Signals: A signal is bandlimited if its Fourier Transform is zero beyond a certain frequency 
𝐵
B.
Frequency Response of LTI Systems
LTI Systems: Characterized by the frequency response 
𝐻
(
𝜔
)
H(ω).
Output Spectrum: 
𝑌
(
𝜔
)
=
𝑋
(
𝜔
)
𝐻
(
𝜔
)
Y(ω)=X(ω)H(ω)
Magnitude Response: 
∣
𝐻
(
𝜔
)
∣
∣H(ω)∣
Phase Response: 
arg
⁡
(
𝐻
(
𝜔
)
)
arg(H(ω))
Circuit Elements in Frequency Domain
Resistors: 
𝑉
(
𝜔
)
=
𝑅
𝐼
(
𝜔
)
V(ω)=RI(ω)
Inductors: 
𝑉
(
𝜔
)
=
𝑗
𝜔
𝐿
𝐼
(
𝜔
)
V(ω)=jωLI(ω)
Capacitors: 
𝐼
(
𝜔
)
=
𝑗
𝜔
𝐶
𝑉
(
𝜔
)
I(ω)=jωCV(ω)
Filters
Lowpass Filter: Passes low frequencies, attenuates high frequencies.
Highpass Filter: Passes high frequencies, attenuates low frequencies.
Bandpass Filter: Passes frequencies within a certain range.
Amplitude Modulation (AM)
Purpose: Shift frequency range for transmission.
Double-Sideband Suppressed-Carrier (DSB-SC) AM: Transmits both sidebands without carrier.
Single-Sideband Suppressed-Carrier (SSB-SC) AM: Transmits only one sideband, more bandwidth-efficient.
Sampling and Interpolation
Sampling: Converting continuous-time signals to discrete-time by taking samples at regular intervals.
Interpolation: Reconstructing continuous-time signals from discrete-time samples.
Nyquist Theorem: A signal must be sampled at least twice the highest frequency present in the signal to be accurately reconstructed.
Aliasing
Definition: Overlapping of frequency components due to insufficient sampling rate.
Prevention: Ensure sampling rate is greater than twice the highest frequency of the signal.
Summary for Exam Preparation
Understand the motivation and development of the Fourier Transform.
Memorize key properties and pairs.
Know the convergence conditions and practical implications.
Apply Fourier Transform concepts to LTI systems and circuit analysis.
Recognize the importance of sampling theorem and avoid aliasing.
Be familiar with filter types and their frequency responses.
Understand AM techniques and their bandwidth implications.`,
};

const formatSummary = (summary, isExpanded) => {
    console.log(summary);

    const sentences = summary.split(/(?<=[.;!?])/);
    if (!isExpanded) {
        console.log("dss")
        return sentences.slice(0, 2).map((sentence, index) => (
            <p key={index}>{sentence.trim()}</p>
        ));
    }
    return sentences.map((sentence, index) => (
        <p key={index}>{sentence.trim()}</p>
    ));
};


function Landing3() {


    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
    // Close popup after 6 seconds
    const timer = setTimeout(() => {
        setShowPopup(false);
    }, 6000);

    // Function to close popup when clicking anywhere
    const handleClick = () => {
        setShowPopup(false);
    };

    // Add event listener to close popup on click
    window.addEventListener('click', handleClick);

    // Cleanup function to clear timer and event listener
    return () => {
        clearTimeout(timer);
        window.removeEventListener('click', handleClick);
    };
    }, []);



    const [selectedLecture, setSelectedLecture] = useState(1);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isCorrect, setIsCorrect] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('selectedAnswers')) || {};
        const filtered = questionsData.filter(q => q.lecture === selectedLecture);
        setFilteredQuestions(filtered);
        setSelectedAnswers(savedAnswers);
        setIsCorrect(savedAnswers);
    }, [selectedLecture]);




    const handleLectureChange = (e) => {
        setSelectedLecture(parseInt(e.target.value));
    };

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers(prev => {
            const newAnswers = { ...prev, [questionId]: answer };
            localStorage.setItem('selectedAnswers', JSON.stringify(newAnswers));
            return newAnswers;
        });
        const question = filteredQuestions.find(q => q.id === questionId);
        if (question && answer === question.correct) {
            setIsCorrect(prev => ({ ...prev, [questionId]: true }));
        } else {
            setIsCorrect(prev => ({ ...prev, [questionId]: false }));
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setTimeout(() => {
                audioRef.current.pause();
            }, 1000);
        }
    };


 const resetAnswers = () => {
        setSelectedAnswers({});
        setIsCorrect({});
        localStorage.removeItem('selectedAnswers');
    };

    const toggleExpanded = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <>
        <div className='pop-up'>
            {showPopup && (
                <div className='popup-content'>
                <p> 

اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ </p>
                </div>
            )}
            
            </div>
            
            <div className='made-by'>
                Made By <a target='_blank' href="https://abdulrhmanelsawy.github.io/abdelrhman-elsawy/"> Abdelrhman Elsawy </a>
            </div>


                    <audio className='hide' ref={audioRef} src={correctSound} /> {/* Add the audio element */}


            <section className='landing'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-l2'>
                            <h1> SIGNALS </h1>
                        </div>
                        <div className='col-l2'>
                            <div className='options'>
                                <select id="ChooseLec" onChange={handleLectureChange} value={selectedLecture}>
                                    <option value='1'>Lec 1</option>
                                    <option value='2'>Lec 2</option>
                                    <option value='3'>Lec 3</option>
                                    <option value='4'>Lec 4</option>
                                    <option value='5'>Lec 5</option>

                                </select>
                            </div>
                        </div>
                        <button className='reset-btn' onClick={resetAnswers}>Reset Answers</button>

                        <div className='col-12'>
                        <div className={`lecture-summary expand-${isExpanded}`}>
                                <h2 className={`lec-${selectedLecture}`}>
                                    {formatSummary(lectureSummaries[selectedLecture], isExpanded)}
                                </h2>
                                <button onClick={toggleExpanded}>
                                    {isExpanded ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                            
                            <div className='question-content'>
                                {filteredQuestions.map(question => (
                                    <div key={question.id} className='question'>
                                        <h3>{question.question}</h3>
                                        <div className='answers'>
                                            {Object.entries(question.answers).map(([key, answer]) => (
                                                <div key={key} className={`input ${selectedAnswers[question.id] === key && isCorrect[question.id] ? 'correct' : ''} ${selectedAnswers[question.id] === key && isCorrect[question.id] === false ? 'wrong' : ''}`}>
                                                    <input
                                                        type='radio'
                                                        id={`${question.id}-${key}`}
                                                        name={`answer-${question.id}`}
                                                        value={key}
                                                        onChange={() => handleAnswerChange(question.id, key)}
                                                        checked={selectedAnswers[question.id] === key}
                                                    />
                                                    <label htmlFor={`${question.id}-${key}`}>{answer}</label>
                                                </div>
                                            ))}
                                        </div>
                                        {isCorrect[question.id] === true && <h6 className='reason'>Reason : {question.reason}</h6>}

                                        {isCorrect[question.id] === false && <h2 className='wrong-answer'>Wrong Answer .... Try Again</h2>}
                                        {isCorrect[question.id] === true && <h2 className='right-answer'>Correct</h2>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="abdelrhman-elsawy-365632204" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://eg.linkedin.com/in/abdelrhman-elsawy-365632204?trk=profile-badge"></a></div>

                </div>
            </section>


        </>
    );
}

export default Landing3;