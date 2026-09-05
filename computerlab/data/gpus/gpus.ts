import {GPU} from "../../types/gpu"

export const gpus:GPU[] = [
    {
        name: "NVIDIA GeForce RTX 4090",
        vram: 24,
        cores: 16384,
        clock: 2520,
        interface: 384,
        bandwidth: 1008,
        tdp: 450
    },
    {
        name: "NVIDIA GeForce RTX 4080 Super",
        vram: 16,
        cores: 10240,
        clock: 2550,
        interface: 256,
        bandwidth: 736,
        tdp: 320
    },
    {
        name: "NVIDIA GeForce RTX 4070 Ti",
        vram: 12,
        cores: 7680,
        clock: 2610,
        interface: 192,
        bandwidth: 504,
        tdp: 285
    },
    {
        name: "NVIDIA GeForce RTX 4060",
        vram: 8,
        cores: 3072,
        clock: 2460,
        interface: 128,
        bandwidth: 272,
        tdp: 115
    },
    {
        name: "AMD Radeon RX 7900 XTX",
        vram: 24,
        cores: 6144,
        clock: 2500,
        interface: 384,
        bandwidth: 960,
        tdp: 355
    },
    {
        name: "AMD Radeon RX 7800 XT",
        vram: 16,
        cores: 3840,
        clock: 2430,
        interface: 256,
        bandwidth: 624,
        tdp: 263
    },
    {
        name: "AMD Radeon RX 7600",
        vram: 8,
        cores: 2048,
        clock: 2655,
        interface: 128,
        bandwidth: 288,
        tdp: 165
    },
    {
        name: "NVIDIA GeForce RTX 3060",
        vram: 12,
        cores: 3584,
        clock: 1777,
        interface: 192,
        bandwidth: 360,
        tdp: 170
    },
    {
        name: "AMD Radeon RX 6650 XT",
        vram: 8,
        cores: 2048,
        clock: 2635,
        interface: 128,
        bandwidth: 280,
        tdp: 180
    },
    {
        name: "NVIDIA GeForce RTX 4070 Super",
        vram: 12,
        cores: 7168,
        clock: 2475,
        interface: 192,
        bandwidth: 504,
        tdp: 220
    }
]