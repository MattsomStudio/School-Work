import React from 'react';
import { Calendar, Zap, Target, Moon, Trophy, Clock, TrendingUp, BookOpen } from 'lucide-react';

export default function ProductivityPoster() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-6" style={{width: '100%', height: '133.33vh'}}>
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-6xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          MOMENTUM OPERATOR
        </h1>
        <p className="text-xl text-cyan-300">Fall 2025 Productivity Blueprint</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-3 gap-3">
        
        {/* Column 1 */}
        <div className="space-y-3">
          {/* Morning Ignition */}
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg p-3 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-6 h-6" />
              <h2 className="text-xl font-bold">MORNING IGNITION</h2>
            </div>
            <div className="text-sm space-y-1.5">
              <p className="font-semibold">First 90 Minutes:</p>
              <ul className="space-y-1 pl-3">
                <li>• 7:00 AM: Alarm ➔ Feet on floor, no snooze</li>
                <li>• 7:05 AM: Text study buddy</li>
                <li>• 7:10 AM: Make bed, chug water</li>
                <li>• 7:20 AM: Get dressed, leave room</li>
                <li>• 7:45 AM: First task started</li>
              </ul>
              <div className="bg-red-700 p-2 rounded mt-1.5">
                <p className="font-bold text-xs">⚡ Don't scroll in bed. Motion = Momentum.</p>
              </div>
            </div>
          </div>

          {/* Course Load */}
          <div className="bg-slate-800 rounded-lg p-3 shadow-xl">
            <h2 className="text-xl font-bold mb-2 text-cyan-400">FALL 2025 COURSES</h2>
            <div className="space-y-1.5 text-sm">
              <div className="bg-blue-900 p-2 rounded">
                <p className="font-semibold">CISC 121</p>
                <p className="text-xs text-gray-300">Intro to Computing I</p>
              </div>
              <div className="bg-blue-900 p-2 rounded">
                <p className="font-semibold">CISC 102</p>
                <p className="text-xs text-gray-300">Discrete Math</p>
              </div>
              <div className="bg-purple-900 p-2 rounded">
                <p className="font-semibold">MATH 112</p>
                <p className="text-xs text-gray-300">Calculus II</p>
              </div>
              <div className="bg-green-900 p-2 rounded">
                <p className="font-semibold">ARIN 100</p>
                <p className="text-xs text-gray-300">Indigenous Studies</p>
              </div>
              <div className="bg-teal-900 p-2 rounded">
                <p className="font-semibold">ASXC 150</p>
                <p className="text-xs text-gray-300">Arts & Sci Core</p>
              </div>
            </div>
          </div>

          {/* Study Locations */}
          <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-lg p-3 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5" />
              <h2 className="text-lg font-bold">STUDY SPOTS</h2>
            </div>
            <div className="text-xs space-y-1">
              <p><span className="font-bold text-cyan-300">Deep Work:</span> Library quiet zone</p>
              <p><span className="font-bold text-cyan-300">Group Study:</span> Common room</p>
              <p><span className="font-bold text-cyan-300">Quick Review:</span> Dorm desk</p>
              <p><span className="font-bold text-yellow-300">⚠️ Never study in bed</span></p>
            </div>
          </div>

          {/* Sleep Protocol */}
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg p-3 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Moon className="w-5 h-5" />
              <h2 className="text-lg font-bold">SLEEP PROTOCOL</h2>
            </div>
            <div className="text-xs space-y-1">
              <p>• 10:30 PM: Phone across room on charger</p>
              <p>• 10:45 PM: Write tomorrow's #1 priority</p>
              <p>• 11:00 PM: Lights out (7-7.5 hours target)</p>
              <p className="font-bold text-purple-300 mt-1">Sleep fuels velocity. No all-nighters.</p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          {/* Momentum Tracker */}
          <div className="bg-slate-800 rounded-lg p-3 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-bold">MOMENTUM TRACKER</h2>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-xs text-cyan-300">LOG DAILY WINS:</p>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-green-900 p-2 rounded">
                  <p className="font-bold text-xs">Academic</p>
                  <p className="text-xs">Problems solved, lectures attended</p>
                </div>
                <div className="bg-blue-900 p-2 rounded">
                  <p className="font-bold text-xs">Health</p>
                  <p className="text-xs">Workouts, 7+ hr sleep, good meals</p>
                </div>
                <div className="bg-purple-900 p-2 rounded">
                  <p className="font-bold text-xs">Social</p>
                  <p className="text-xs">Study groups, club meetings</p>
                </div>
                <div className="bg-orange-900 p-2 rounded">
                  <p className="font-bold text-xs">Skills</p>
                  <p className="text-xs">Side projects, resume items</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-2 rounded">
                <p className="font-bold text-sm">WEEKLY VELOCITY CHECK:</p>
                <p className="text-xs">Sunday: Am I faster than last week? List 3 proofs.</p>
              </div>
            </div>
          </div>

          {/* Pressure Design */}
          <div className="bg-gradient-to-br from-red-900 to-orange-900 rounded-lg p-3 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-6 h-6" />
              <h2 className="text-xl font-bold">PRESSURE DESIGN</h2>
            </div>
            <div className="text-sm space-y-2">
              <p className="font-semibold text-xs">Manufacture Stakes Daily:</p>
              <div className="space-y-1.5 text-xs">
                <div className="bg-red-800 p-2 rounded">
                  <p className="font-bold">⏰ Time Pressure</p>
                  <p>45min work / 10min break (Pomodoro)</p>
                  <p>Phone timer visible on desk</p>
                </div>
                <div className="bg-orange-800 p-2 rounded">
                  <p className="font-bold">🏆 Competition</p>
                  <p>Challenge friends on practice problems</p>
                  <p>"Beat yesterday's numbers"</p>
                </div>
                <div className="bg-yellow-800 p-2 rounded">
                  <p className="font-bold">📢 Public Commitment</p>
                  <p>Post daily goals in group chat</p>
                  <p>Report completion for accountability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Anti-Procrastination */}
          <div className="bg-slate-800 rounded-lg p-3 shadow-xl">
            <h2 className="text-lg font-bold mb-2 text-red-400">ANTI-PROCRASTINATION</h2>
            <div className="text-xs space-y-1">
              <p>• Phone in backpack during study blocks</p>
              <p>• "5-minute rule": Just start, momentum follows</p>
              <p>• Break tasks into 20-min chunks</p>
              <p>• Stuck? Walk or do 20 pushups</p>
              <p className="font-bold text-yellow-300 mt-1">Move first, think later.</p>
            </div>
          </div>

          {/* Recognition */}
          <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg p-3 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5" />
              <h2 className="text-lg font-bold">VISIBILITY STRATEGY</h2>
            </div>
            <div className="text-xs space-y-1.5">
              <div className="bg-orange-700 p-2 rounded">
                <p className="font-bold">When praised, say:</p>
                <p>"I appreciate that"</p>
                <p className="text-xs opacity-80">(then stop talking)</p>
              </div>
              <p className="font-semibold">Group Projects:</p>
              <p>• Speak early (frame approach)</p>
              <p>• Own a specific role</p>
              <p>• Use your signature methods</p>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-3">
          {/* Weekly Structure */}
          <div className="bg-slate-800 rounded-lg p-3 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-bold">WEEKLY RHYTHM</h2>
            </div>
            <div className="text-xs space-y-2">
              <div>
                <p className="font-bold text-cyan-300 text-sm">MONDAY - Launch</p>
                <p>Review week, set 3 targets. Hardest homework first.</p>
              </div>
              <div>
                <p className="font-bold text-cyan-300 text-sm">TUE/THU - Grind</p>
                <p>Most classes. Between: library quick wins. Evening: study group or gym.</p>
              </div>
              <div>
                <p className="font-bold text-cyan-300 text-sm">WED - Pivot</p>
                <p>Catch-up buffer. Office hours if needed. Mid-week check.</p>
              </div>
              <div>
                <p className="font-bold text-cyan-300 text-sm">FRI - Sprint Finish</p>
                <p>Close all loops. Submit everything. Log wins.</p>
              </div>
              <div>
                <p className="font-bold text-cyan-300 text-sm">WEEKEND - Reload</p>
                <p>SAT AM: Big assignments. SAT PM: Social. SUN: Prep week.</p>
              </div>
            </div>
          </div>

          {/* Semester Goals */}
          <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-lg p-3 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5" />
              <h2 className="text-lg font-bold">SEMESTER TARGETS</h2>
            </div>
            <div className="text-xs space-y-2">
              <div>
                <p className="font-bold text-green-300">Academic Velocity:</p>
                <p>• 3.5+ GPA</p>
                <p>• 1-2 coding side projects</p>
                <p>• Zero missed deadlines</p>
              </div>
              <div>
                <p className="font-bold text-green-300">Life Systems:</p>
                <p>• 7+ hours sleep (5 nights/week min)</p>
                <p>• Morning launch: 90%+ success</p>
                <p>• Gym 3x/week</p>
              </div>
              <div>
                <p className="font-bold text-green-300">Social Capital:</p>
                <p>• Build 3 study partnerships</p>
                <p>• Join 1 CS/tech club</p>
                <p>• Weekly call home</p>
              </div>
            </div>
          </div>

          {/* October Calendar Preview */}
          <div className="bg-slate-800 rounded-lg p-3 shadow-xl">
            <h2 className="text-lg font-bold mb-2 text-cyan-400">OCTOBER DEADLINES</h2>
            <div className="text-xs space-y-1">
              <p className="text-yellow-300">Week 1-2: Syllabus week, get systems running</p>
              <p className="text-orange-300">Week 3: CISC 121 Assignment 1 due</p>
              <p className="text-orange-300">Week 4: MATH 112 first test</p>
              <p className="text-red-300">Week 5: CISC 102 problem set, ARIN reflection</p>
            </div>
          </div>

          {/* November Preview */}
          <div className="bg-slate-800 rounded-lg p-3 shadow-xl">
            <h2 className="text-lg font-bold mb-2 text-cyan-400">NOVEMBER DEADLINES</h2>
            <div className="text-xs space-y-1">
              <p className="text-orange-300">Week 6-7: Midterms (CISC, MATH, ASXC)</p>
              <p className="text-orange-300">Week 8: ARIN essay due</p>
              <p className="text-yellow-300">Week 9: Reading week - catch up, review</p>
            </div>
          </div>

          {/* December Preview */}
          <div className="bg-slate-800 rounded-lg p-3 shadow-xl">
            <h2 className="text-lg font-bold mb-2 text-cyan-400">DECEMBER DEADLINES</h2>
            <div className="text-xs space-y-1">
              <p className="text-orange-300">Week 10-11: Final projects due (CISC 121, ASXC)</p>
              <p className="text-red-300">Week 12: Last classes, review sessions</p>
              <p className="text-red-300">Week 13-14: FINAL EXAMS</p>
            </div>
          </div>

          {/* Core Identity */}
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg p-3 shadow-xl">
            <p className="text-sm font-bold text-center text-cyan-300">
              "You want to FEEL VELOCITY"
            </p>
            <p className="text-xs text-center mt-1 text-gray-300">
              Stack proof. Build momentum. Operate at speed.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-3">
        <p className="text-xs text-gray-400">
          Goals: Less procrastination • Better sleep • Morning momentum • 3.5+ GPA
        </p>
      </div>
    </div>
  );
}