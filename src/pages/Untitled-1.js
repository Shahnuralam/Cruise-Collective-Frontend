

const SpecialOffers = () => {
  const [selectedPort, setSelectedPort] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  const { isLoading: isLoadingDepartures, data: departures, refetch: refetchDepartures } = useQuery(
    "departures",
    () => getDepartures(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  const { isLoading: isLoadingDestinations, data: destinations, refetch: refetchDestinations } = useQuery(
    "destinations",
    () => getDestinations(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  const { isLoading: isLoadingSeasons, data: seasons, refetch: refetchSeasons } = useQuery(
    "seasons",
    () => getSeasons(),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );

  // Filter special offers based on selected filters
  const filteredOffers = cruiseLineItemData
    .filter((offer) => !selectedPort || offer.departurePort === selectedPort.value)
    .filter((offer) => !selectedDestination || offer.cruiseDestination === selectedDestination.value)
    .filter((offer) => !selectedPriceRange || offer.priceRange === selectedPriceRange.value)
    .filter((offer) => !selectedSeason || offer.season === selectedSeason.value);

  return (
    <main>
      <div className="flex flex-col px-3 md:px-[32px] lg:px-[75px] pt-4 md:pt-[75px]">
        <section className="mb-12">
          <PageHeading
            pageHeaderData={{
              heading: "Exclusive Cruise Collective special offers and deals",
              text: "",
            }}
            fontSizeValue="28px"
          />

          <p className="mt-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet ultricies felis. Cras sit amet ligula velit. Sed in tortor est.
            Fusce egestas at felis quis volutpat. Nam placerat auctor nisl, id
            efficitur urna. Nam non fermentum diam, vehicula euismod dui.
            Praesent finibus ultricies mollis. Integer accumsan varius
            sollicitudin. Vivamus sollicitudin efficitur lectus. Nunc sed elit
            vel metus porta facilisis. Etiam lacinia lacus a ante placerat, et
            placerat lorem convallis.
          </p>
        </section>

        <div className="text-3xl block lg:hidden mb-2">Filter by:</div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="text-3xl hidden lg:block">Filter by:</div>

          <Select
            className="w-full"
            value={selectedPort}
            onChange={(selectedOption) => setSelectedPort(selectedOption)}
            options={departurePorts}
            placeholder="Departure ports"
          />
          <Select
            className="w-full"
            value={selectedDestination}
            onChange={(selectedOption) => setSelectedDestination(selectedOption)}
            options={cruiseDestinations}
            placeholder="Cruise destinations"
          />
          <Select
            className="w-full"
            value={selectedPriceRange}
            onChange={(selectedOption) => setSelectedPriceRange(selectedOption)}
            options={priceRange}
            placeholder="Price range"
          />

          <Select
            className="w-full"
            value={selectedSeason}
            onChange={(selectedOption) => setSelectedSeason(selectedOption)}
            options={seasons}
            placeholder="Season"
          />
        </div>
      </div>

      <section>
        <CruiseLineOffer offers={filteredOffers} />
      </section>
    </main>
  );
};

export default SpecialOffers;
