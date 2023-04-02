export interface Welcome9 {
  "wine-searcher": WineSearcher;
}

export interface WineSearcher {
  "return-code":        string;
  "list-comment":       string;
  "list-location":      string;
  "list-state":         string;
  "list-currency-code": string;
  "wine-details":       WineDetails;
}

export interface WineDetails {
  wine: Wine;
}

export interface Wine {
  region:          string;
  grape:           string;
  "price-average": string;
  "price-min":     string;
  "price-max":     string;
  "ws-score":      string;
}
