// 1:
// transform "first list" and other "first_list", by adding `_` between words;
// 2:
// transform "- serhii riznychuk\n- julia burmych\n..." to ['serhii riznychuk' 'julia burmych' ... ]
let some =
    {
        "first list": "- serhii riznychuk\n- julia burmych\n- aleksandr sinkowski\n",
        "second list": "- serhii riznychuk\n- julia burmych\n- aleksandr sinkowski\n",
        "some other": "- serhii riznychuk\n- julia burmych\n- aleksandr sinkowski\n",
        "i think": "- serhii riznychuk\n- julia burmych\n- aleksandr sinkowski\n",
        "_" : "- serhii riznychuk\n- julia burmych\n- aleksandr sinkowski\n"
    }
// 3:
// transform `1s2` to `1s<sup>2</sup>`
let table =
    {
        "Yttrium": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
        "Zirconium": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
        "Niobium": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2",
        "Molybdenum": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
        "Technetium": "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5",
        "Ruthenium": "31s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
    }
