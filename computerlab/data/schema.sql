CREATE TYPE socket_type AS ENUM ("INTEL","AMD");
CREATE TYPE motherboard_form_factor AS ENUM ("ATX","MICRO-ATX","MINI-ITX");
CREATE TYPE psu_form_factor AS ENUM ("ATX","SFX","TFX");
CREATE TYPE memory_type AS ENUM ("DDR4","DDR5");
CREATE TYPE ram_form_factor AS ENUM ("DIMM","SO-DIMM");
CREATE TYPE efficiency_rating AS ENUM (
   "80 Plus",
  "80 Plus Bronze",
  "80 Plus Silver",
  "80 Plus Gold",
  "80 Plus Platinum",
  "80 Plus Titanium"
);
CREATE TYPE storage_type AS ENUM ("HDD","SSD","NVMe");

CREATE TABLE labs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL
);

CREATE TABLE cpus (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,
  cores      INTEGER NOT NULL,
  threads    INTEGER NOT NULL,
  frequency  NUMERIC NOT NULL,
  cache1     NUMERIC NOT NULL,
  cache2     NUMERIC NOT NULL,
  cache3     NUMERIC NOT NULL,
  tdp        NUMERIC NOT NULL, -- Thermal Design Power, em Watts (W)
  socket     socket_type NOT NULL,
  litography NUMERIC NOT NULL, -- em nm
  igpu       BOOLEAN NOT NULL DEFAULT FALSE
);
 
CREATE TABLE gpus (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name      TEXT NOT NULL,
  vram      NUMERIC NOT NULL,
  cores     INTEGER NOT NULL,      -- nucleos de processamento
  clock     NUMERIC NOT NULL,      -- em MHz
  bus_width INTEGER NOT NULL,      -- em bits (era "interface")
  bandwidth NUMERIC NOT NULL,      -- em GB/s
  tdp       NUMERIC NOT NULL       -- em Watts (W)
);
 
CREATE TABLE motherboards (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name           TEXT NOT NULL,
  socket         socket_type NOT NULL,
  chipset        TEXT NOT NULL,
  form_factor    motherboard_form_factor NOT NULL,
  memory_type    memory_type NOT NULL,
  memory_speed   NUMERIC NOT NULL, -- em MHz
  memory_slots   INTEGER NOT NULL,
  maximum_memory NUMERIC NOT NULL, -- em GB
  storage_slots  INTEGER NOT NULL
);
 
CREATE TABLE psus (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name              TEXT NOT NULL,
  wattage           NUMERIC NOT NULL, -- em Watts (W)
  connectors        INTEGER NOT NULL,
  form_factor       psu_form_factor NOT NULL,
  efficiency_rating efficiency_rating NOT NULL
);
 
CREATE TABLE computers (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name           TEXT NOT NULL,
  cpu_id         UUID NOT NULL UNIQUE REFERENCES cpus(id),
  gpu_id         UUID NOT NULL UNIQUE REFERENCES gpus(id),
  motherboard_id UUID NOT NULL UNIQUE REFERENCES motherboards(id),
  psu_id         UUID NOT NULL UNIQUE REFERENCES psus(id),
  lab_id         UUID REFERENCES labs(id)
);
 
CREATE TABLE rams (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  capacity    NUMERIC NOT NULL, -- em GB
  memory_type memory_type NOT NULL,
  speed       NUMERIC NOT NULL, -- em MHz
  cl          INTEGER NOT NULL, -- latencia
  form_factor ram_form_factor NOT NULL,
  computer_id UUID REFERENCES computers(id) ON DELETE CASCADE
);
 
CREATE TABLE storages (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  type        storage_type NOT NULL,
  latency     NUMERIC NOT NULL, -- em ms
  capacity    NUMERIC NOT NULL, -- em GB
  read_speed  NUMERIC NOT NULL, -- em MB/s
  write_speed NUMERIC NOT NULL, -- em MB/s
  computer_id UUID REFERENCES computers(id) ON DELETE CASCADE
);