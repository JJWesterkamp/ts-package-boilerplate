declare const PackageName: PackageName.Static;
export default PackageName;
export as namespace PackageName;

declare namespace PackageName {

    interface Static {
        staticMethod(): void;
    }

    // Public object interfaces go here
}